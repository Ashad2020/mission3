import express from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.route";
import { AcademicSemeterRoutes } from "../modules/academicSemeter/academicSemeter.route";
const router = express.Router();
const moduleRoutes = [
  { path: "/students", route: studentRoutes },
  { path: "/users", route: userRoutes },
  { path: "/academic-semesters", route: AcademicSemeterRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
