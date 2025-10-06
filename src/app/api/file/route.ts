import { NextRequest, NextResponse } from "next/server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import { v4 as uuidv4 } from "uuid";
import { index } from "@/utils/pineCone";
import connectToDB, { prisma } from "@/utils/db";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    const form = await req.formData();
    // file
    const file = form.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file found" }, { status: 500 });
    }
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDFs allowed" }, { status: 400 });
    }

    // arrayBuffer
    const arrayBuffer = await file.arrayBuffer();

    // extract text from the file
    const loader = new PDFLoader(new Blob([arrayBuffer]));
    const documentText = await loader.load();
    const extractedText = documentText.map((doc) => doc.pageContent).join("\n");
    console.log(extractedText, "extractedText");

    // Split text in Small Chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 786,
      chunkOverlap: 76,
    });
    const texts = await textSplitter.createDocuments([extractedText]);

    // Format The Chunks
    const chunks = texts.map((doc) => doc.pageContent.replace(/\n/g, " "));

    // Initialize OpenAI
    const embeddings = new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
      model: "text-embedding-3-large",
    });

    // create Vector Embeddings
    const vectors = await embeddings.embedDocuments(chunks);
    console.log(vectors, "vectors");

    const fileId = uuidv4();

    // Upload Chunks to the Pinecone(Vector Database)
    try {
      await uploadChunksToPineCone(fileId, file, chunks, vectors);
      console.log("chunks Uploaded");
    } catch (error) {
      throw error;
    }

    await prisma.file.create({
      data: {
        id: fileId,
        fileName: file.name,
      },
    });

    return NextResponse.json(
      { message: "File Uploaded Successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};

const uploadChunksToPineCone = async (
  fileId: string,
  file: File,
  chunks: string[],
  vectors: number[][]
) => {
  const batchSize = 100;
  let batch = [];

  for (let i = 0; i < chunks.length; i++) {
    const metaData = {
      text: chunks[i],
      fileName: file.name,
      fileId: fileId,
      chunkIndex: i,
    };
    const chunkId = uuidv4();
    batch.push({ id: chunkId, metadata: metaData, values: vectors[i] });
    if (batch.length === batchSize || i === chunks.length - 1) {
      await index.upsert(batch);
      batch = [];
    }
  }
};

// route to getALL Files
export const GET = async (request: NextRequest) => {
  try {
    await connectToDB();

    const files = await prisma.file.findMany();
    if (!files || files.length < 1) {
      return NextResponse.json({ message: "No Files Found" }, { status: 200 });
    }
    return NextResponse.json({ files, status: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
