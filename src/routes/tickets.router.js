import { Router } from "express";
import { getTicketsByCity, getTicketsById } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();

ticketsRouter.get("/cities/:id", getTicketsByCity);
ticketsRouter.get("/ticket/:id", getTicketsById);

export default ticketsRouter;