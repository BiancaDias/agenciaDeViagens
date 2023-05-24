import { Router } from "express";
import adminRouter from "./admin.routes.js";
import citiesRouter from "./cities.router.js";

const router = Router();

router.use(adminRouter);
router.use(citiesRouter);

export default router;