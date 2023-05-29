import { Router } from "express";
import { postAccommodation, postCiasAereas, postCities, postConveniences, postTickets } from "../controllers/admin.controllers.js";


const adminRouter = Router();

adminRouter.post("/admin/tickets", postTickets);
adminRouter.post("/admin/cias", postCiasAereas)
adminRouter.post("/admin/conveniences", postConveniences)
adminRouter.post("/admin/accommodation", postAccommodation)
adminRouter.post("/admin/cities", postCities);

export default adminRouter;