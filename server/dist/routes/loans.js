"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const loanController_js_1 = require("../controller/loanController.js");
const router = express.Router();
router.post("/apply-loan", loanController_js_1.applyLoan);
router.get("/loans", loanController_js_1.getAllLoans);
exports.default = router;
