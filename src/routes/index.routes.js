import { Router } from "express";
import adminRouter from "./admin.routes.js";
import citiesRouter from "./cities.routes.js";
import ticketsRouter from "./tickets.routes.js";
import accommodationRouter from "./accommodation.routes.js";

const router = Router();

router.use(adminRouter);
router.use(citiesRouter);
router.use(ticketsRouter);
router.use(accommodationRouter);

export default router;