import { Router } from "express";
import { getAccommodationsByCity, getAccommodationsById } from "../controllers/accommodation.controllers.js";

const accommodationRouter = Router();

accommodationRouter.get("/cities/accommodation/:id", getAccommodationsByCity);
accommodationRouter.get("/accommodation/:id", getAccommodationsById)

export default accommodationRouter;