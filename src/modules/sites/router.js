import { Router } from "express";
import controller from "./controller.js";


const router = Router();

router.get("/sites", controller.GET);
router.get("/sites/:sitesId", controller.GET);
router.post("/sites", controller.POST);
router.put("/sites/:sitesId", controller.PUT);
router.delete("/sites/:sitesId", controller.DELETE);


export default router;
