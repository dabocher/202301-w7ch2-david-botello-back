import "../../loadEnvironments.js";
import type { NextFunction, Request, Response } from "express";
import type { UserCredentials } from "../types.js";
import User from "../../database/models/User.js";
import { CustomError } from "../../CustomError/CustomError.js";
import jwt from "jsonwebtoken";

const loginUser = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    UserCredentials
  >,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    const customError = new CustomError(
      "Wrong credentials",
      401,
      "Wrong credentials"
    );

    next(customError);
    return;
  }

  const jwtPayload = {
    sub: user._id,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!, {
    expiresIn: "2d",
  });

  res.status(200).json({ token });
};

export default loginUser;
