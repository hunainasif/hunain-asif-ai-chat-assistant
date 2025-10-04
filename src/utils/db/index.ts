import { PrismaClient } from "@/generated/prisma";

export const prisma = new PrismaClient();

const connectToDB = async () => {
  try {
    await prisma.$connect();
    console.log(`Database Connected`);
  } catch (error) {
    console.error(error);
    prisma.$disconnect();
    throw new Error("Error in connecting Database");
  }
};
export default connectToDB;
