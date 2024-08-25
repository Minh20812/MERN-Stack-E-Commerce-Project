import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asynHandler.js";

const createUser = asyncHandler(async (req, res) => {
  res.send("hello");
});

export { createUser };
