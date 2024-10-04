import { studentSchema } from "../schema/student.js";
import mongoose from "mongoose";

const student = mongoose.model("student", studentSchema);

export default student;