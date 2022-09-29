import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/Workers", controller.GET);
router.get("/Workers/:WorkersId", controller.GET);
router.post("/Workers", controller.POST);
router.put("/Workers/:WorkersId", controller.PUT);
router.delete("/Workers/:WorkersId", controller.DELETE);

export default router;
