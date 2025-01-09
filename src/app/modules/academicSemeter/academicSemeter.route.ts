import express from "express";
import { AcademicSemesterControllers } from "./academicSemeter.controller";
import validateRequest from "../../middlewares/validateRequest";
import { academicSemeterValidations } from "./academicSemeter.validation";

const router = express.Router();
router.post(
  "/create-academic-semester",
  validateRequest(
    academicSemeterValidations.createAcademicSemeterValidationSchema
  ),
  AcademicSemesterControllers.CreateAcademicSemester
);

router.get("/", AcademicSemesterControllers.GetAllAcademicSemeter);
router.get("/:id", AcademicSemesterControllers.GetSingleAcademicSemester);
router.patch(
  "/:id",
  validateRequest(
    academicSemeterValidations.updateAcademicSemesterValidationSchema
  ),
  AcademicSemesterControllers.UpdateSingleAcademicSemester
);
// router.get("/:studentId", studentControllers.getSingleStudent);
// router.delete("/:studentId", studentControllers.deleteStudent);
export const AcademicSemeterRoutes = router;
