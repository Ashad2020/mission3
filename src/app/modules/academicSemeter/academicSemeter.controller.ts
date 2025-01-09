import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";

const CreateAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.CreateAcademicSemesterIntoDB(
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Academic Semester is created successfully",
    data: result,
  });
});
const GetAllAcademicSemeter = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.GetAllAcademicSemesterFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Academic Semesters are retrieved successfully",
    data: result,
  });
});
const GetSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result =
    await AcademicSemesterServices.GetSingleAcademicSemesterFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Academic Semester is retrieved successfully",
    data: result,
  });
});
const UpdateSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result =
    await AcademicSemesterServices.UpdateSingleAcademicSemesterIntoDb(
      id,
      req.body
    );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Academic Semester is updated successfully",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  CreateAcademicSemester,
  GetAllAcademicSemeter,
  GetSingleAcademicSemester,
  UpdateSingleAcademicSemester,
};
