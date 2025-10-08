import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    let db = process.env.DATABASE_URL!;
    await mongoose.connect(db);
    console.log(`Database connected`);
  } catch (error) {
    throw error;
  }
};
