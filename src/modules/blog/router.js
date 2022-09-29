import { Router } from "express";
import controller from "./controller.js";


const router = Router();

router.get("/Blog", controller.GET);
router.get("/Blog/:BlogId", controller.GET);
router.post("/Blog", controller.POST);
router.put("/Blog/:BlogId", controller.PUT);
router.delete("/Blog/:BlogId", controller.DELETE);


export default router;
