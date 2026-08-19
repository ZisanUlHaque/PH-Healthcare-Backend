import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AppointmentServices } from "./appointment.service";

const bookAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentServices.bookAppointment()
    console.log(result);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book Appointment successfully",
        data: result,
    });
});

const bookAppointmentCallback = catchAsync(async (req: Request, res: Response) => {
    console.log(req.query, "req.query");
    const result =  AppointmentServices.bookAppointmentCallback()
    console.log(result);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book Appointment successfully",
        data: result,
    });
});


export const AppointmentController = {
    bookAppointment,
    bookAppointmentCallback
}