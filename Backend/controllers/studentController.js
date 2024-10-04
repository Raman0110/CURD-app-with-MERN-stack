import student from "../models/studentModel.js";

export const getStudent = async (req, res) => {
  try {
    const findStudent = await student.find({});
    res.status(200).json(findStudent);
  } catch (error) {
    console.log(error);
  }
}

export const addStudent = async (req, res) => {
  try {
    const newStudent = await student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    console.log(error);
  }
}

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const findStudentById = await student.findById(id);
    res.status(200).json(findStudentById);
  } catch (error) {
    console.log(error);
  }
}

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStudent = await student.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Student detail updated successfully" });
  } catch (error) {
    console.log(error);
  }
}

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const newStudent = await student.findByIdAndDelete(id);
    res.status(200).json({ message: "Student detail deleted successfully" });
  } catch (error) {
    console.log(error);
  }
}