import { Router } from "express";
import { AppointmentController } from "./appointment.controller";

const router = Router();


router.post("/book-appointment", AppointmentController.bookAppointment)



export const AppointementRoutes = router;