import express from "express";
import { getStudent, addStudent, getStudentById, updateStudent, deleteStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudent);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);


export default router;