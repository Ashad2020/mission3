import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import errorMap from "zod/lib/locales/en";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "students are retreived successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Student retrieved by id successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Student deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const studentControllers = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
