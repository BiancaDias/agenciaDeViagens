import { Router } from "express";
import { postCiasAereas, postTickets } from "../controllers/admin.controllers.js";


const adminRouter = Router();

adminRouter.post("/admin/tickets", postTickets);
adminRouter.post("/admin/cias", postCiasAereas)

export default adminRouter;