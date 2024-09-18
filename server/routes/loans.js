import express from "express";
import { applyLoan, getAllLoans } from "../controller/loanController.js";

const router = express.Router();

router.post("/apply-loan", applyLoan);
router.get("/loans", getAllLoans);

export default router;
