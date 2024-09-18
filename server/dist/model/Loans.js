"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const loanSchema = new mongoose_1.default.Schema({
    fullName: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    loanTenure: { type: Number, required: true },
    employmentStatus: { type: String, required: true },
    reasonForLoan: { type: String, required: true },
    employmentAddress: { type: String, required: true },
    action: { type: String, default: "pending" },
}, { timestamps: true });
const Loan = mongoose_1.default.model("Loan", loanSchema);
exports.default = Loan;
