import { Router } from "express";
import { getTicketsByCity, getTicketsById } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();

ticketsRouter.get("/cities/ticket/:id", getTicketsByCity);
ticketsRouter.get("/ticket/:id", getTicketsById);

export default ticketsRouter;