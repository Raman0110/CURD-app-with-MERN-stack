import mongoose from "mongoose";

export const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"]
    },
    address: {
      type: String,
      required: [true, "Student address is required"]
    },
    faculty: {
      type: String,
      required: [true, "Student's faculty is required"]
    },
  },
  {
    timestamps: true,
  }
);