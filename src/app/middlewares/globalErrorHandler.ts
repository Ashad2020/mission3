import { NextFunction, Request, Response } from "express";
import status from "http-status";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = "Something went wrong";
  res
    .status(status.INTERNAL_SERVER_ERROR)
    .json({ success: false, message, error: err });
};
