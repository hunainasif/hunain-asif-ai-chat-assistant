import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});
const pineConeIndex = process.env.PINECONE_INDEX!;
export const index = pc.index(pineConeIndex);
