import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/contactUs", controller.GET);
router.get("/contactUs/:contactUsId", controller.GET);
router.post("/contactUs", controller.POST);
router.put("/contactUs/:contactUsId", controller.PUT);
router.delete("/contactUs/:contactUsId", controller.DELETE);


export default router;