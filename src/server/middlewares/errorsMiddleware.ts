import type { NextFunction, Request, Response } from "express";
import { CustomError } from "../../CustomError/CustomError";

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const notFound = new CustomError("Not found", 404, "Sorry, robot not found");

  next(notFound);
};

export const commomError = (
  { statusCode, publicMessage }: CustomError,
  req: Request,
  res: Response
) => {
  res
    .status(statusCode || 500)
    .json({ error: publicMessage || "Internal roboserver error" });
};
