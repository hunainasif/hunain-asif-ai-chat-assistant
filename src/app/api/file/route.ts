import { NextRequest, NextResponse } from "next/server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import { v4 as uuidv4 } from "uuid";
import { index } from "@/app/utils/pineCone";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
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
    let arrayBuffer = await file.arrayBuffer();

    // extract text from the file
    const loader = new PDFLoader(new Blob([arrayBuffer]));
    const documentText = await loader.load();
    let extractedText = documentText.map((doc) => doc.pageContent).join("\n");

    // Split text in Small Chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 786,
      chunkOverlap: 76,
    });
    const texts = await textSplitter.createDocuments([extractedText]);

    // Format The Chunks
    let chunks = texts.map((doc) => doc.pageContent.replace(/\n/g, " "));

    // Initialize OpenAI
    const embeddings = new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
      model: "text-embedding-3-large",
    });

    // create Vector Embeddings
    const vectors = await embeddings.embedDocuments(chunks);

    // Upload Chunks to the Pinecone(Vector Database)
    await uploadChunksToPineCone(file, chunks, vectors);
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
  file: File,
  chunks: string[],
  vectors: number[][]
) => {
  let batchSize = 100;
  let batch = [];

  for (let i = 0; i < chunks.length; i++) {
    const id = uuidv4();

    let metaData = {
      text: chunks[i],
      fileName: file.name,
      id: id,
    };
    batch.push({ id: id, metadata: metaData, values: vectors[i] });
    if (batch.length === batchSize || i === chunks.length - 1) {
      await index.upsert(batch);
      batch = [];
    }
  }
};
