import { NextRequest, NextResponse } from "next/server";
import { OpenAIEmbeddings } from "@langchain/openai";
import { index } from "@/utils/pineCone";
import OpenAI from "openai";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    // QueryText
    let { text } = await req.json();

    //    create vector Embedding of the Text
    const embeddings = new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
      model: "text-embedding-3-large",
    });
    const vectors = await embeddings.embedQuery(text);

    // Search the PineCone with the Query
    const queryResponse = await index.query({
      vector: vectors,
      topK: 3,
      includeMetadata: true,
    });
    //  Format the Context
    let context = queryResponse.matches
      .map((doc) => doc?.metadata?.text)
      .join("\n");

    //   Initialize the Open AI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    // CHat with LLM
    let chat = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that extracts information strictly from context. Format clearly and stay concise.",
        },
        {
          role: "user",
          content: `Answer the following question based ONLY on the given context. 
          If the information is missing, respond with: "I don't have that information."

           Question: ${text}

           Context:
        ${context}`,
        },
      ],
    });
    //    format LLm Response
    let openAiResponse = chat?.choices[0]?.message?.content?.trim();

    return NextResponse.json(
      { message: openAiResponse, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
