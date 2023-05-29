import { Router } from "express";
import { postAccommodation, postCiasAereas, postCities, postConveniences, postTickets } from "../controllers/admin.controllers.js";
import { validateSchema } from "../middlewares/validadeSchema.middleware.js";
import { ciaAereaSchema, citiesSchema, ticketSchema } from "../schemas/admin.schemas.js";


const adminRouter = Router();

adminRouter.post("/admin/tickets", validateSchema(ticketSchema), postTickets);
adminRouter.post("/admin/cias", validateSchema(ciaAereaSchema), postCiasAereas)
adminRouter.post("/admin/conveniences", postConveniences)
adminRouter.post("/admin/accommodation", postAccommodation)
adminRouter.post("/admin/cities", validateSchema(citiesSchema), postCities);

export default adminRouter;