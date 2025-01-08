import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { studentRoutes } from "./app/modules/student/student.route";
import { userRoutes } from "./app/modules/user/user.route";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";
import router from "./app/routes";
const app = express();

app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1", router);

// Route handler for the root path
app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Not Found Handler
app.use(notFound);
app.use(globalErrorHandler);
export default app;
