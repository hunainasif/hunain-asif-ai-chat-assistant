import { metadata } from "@/app/layout";
import connectToDB, { prisma } from "@/utils/db";
import { index } from "@/utils/pineCone";
import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const { id } = params;

    await index.deleteMany({
      fileId: { $eq: id },
    });
    await prisma.file.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(
      { message: "File has been Deleted", status: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
