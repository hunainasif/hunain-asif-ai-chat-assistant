import mongoose from "mongoose";

export const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    uploadDate: {
      type: String,
      required: true,
      default: () => new Date().toISOString(),
    },
  },
  { timestamps: true }
);

const FileModel = mongoose.models.file || mongoose.model("file", fileSchema);

export default FileModel;
