import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  const result = await userServices.createStudentIntoDb(password, studentData);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

export const userControllers = {
  createStudent,
};
