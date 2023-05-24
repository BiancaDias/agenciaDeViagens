import { Router } from "express";
import { postAccommodation, postCiasAereas, postConveniences, postTickets } from "../controllers/admin.controllers.js";


const adminRouter = Router();

adminRouter.post("/admin/tickets", postTickets);
adminRouter.post("/admin/cias", postCiasAereas)
adminRouter.post("/admin/conveniences", postConveniences)
adminRouter.post("/admin/accommodation", postAccommodation)

export default adminRouter;