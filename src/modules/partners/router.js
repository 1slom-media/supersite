import { Router } from "express";
import controller from "./controller.js";


const router = Router();

router.get("/partners", controller.GET);
router.get("/partners/:partnersId", controller.GET);
router.post("/partners", controller.POST);
router.put("/partners/:partnersId", controller.PUT);
router.delete("/partners/:partnersId", controller.DELETE);


export default router;