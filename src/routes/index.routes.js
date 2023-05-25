import { Router } from "express";
import adminRouter from "./admin.routes.js";
import citiesRouter from "./cities.router.js";
import ticketsRouter from "./tickets.router.js";

const router = Router();

router.use(adminRouter);
router.use(citiesRouter);
router.use(ticketsRouter);

export default router;