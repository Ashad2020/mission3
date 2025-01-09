import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { studentValidationSchemas } from "../student/student.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(studentValidationSchemas.createStudentValidationSchema),
  userControllers.createStudent
);

export const userRoutes = router;
