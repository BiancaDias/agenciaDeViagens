import { Router } from "express";
import { getTicketsByCity } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();

ticketsRouter.get("/tickets/:id", getTicketsByCity);

export default ticketsRouter;