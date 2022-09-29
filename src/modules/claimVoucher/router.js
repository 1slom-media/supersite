import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/claimVoucher", controller.GET);
router.get("/claimVoucher/:claimVoucherId", controller.GET);
router.post("/claimVoucher", controller.POST);
router.put("/claimVoucher/:claimVoucherId", controller.PUT);
router.delete("/claimVoucher/:claimVoucherId", controller.DELETE);


export default router;