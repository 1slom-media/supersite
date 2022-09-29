import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/Reviews", controller.GET);
router.get("/Reviews/:ReviewsId", controller.GET);
router.post("/Reviews", controller.POST);
router.put("/Reviews/:ReviewsId", controller.PUT);
router.delete("/Reviews/:ReviewsId", controller.DELETE);


export default router;
