import FileModel from "@/models/file.model";
import { connectToDb } from "@/utils/db";
import { index } from "@/utils/pineCone";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    await connectToDb();
    const { id } = await context.params;

    // Delete from Pinecone
    await index.deleteMany({
      fileId: { $eq: id },
    });
    await FileModel.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "File has been deleted", status: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
