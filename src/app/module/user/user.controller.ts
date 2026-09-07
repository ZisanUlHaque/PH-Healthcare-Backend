import type { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.services";

const uploadProfieImage = catchAsync(async (req: Request, res: Response) => {
	if (!req.file) {
		return res.status(400).json({ error: "No file uploaded" });
	}

	const userId = req.user?.userId;
	const result = await UserService.uploadProfieImage(req.file?.buffer, userId!);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Image Upload successfully",
		data: result,
	});
});

export const UserController = {
	uploadProfieImage,
};
