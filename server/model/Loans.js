import mongoose, { Document, Schema, Model } from "mongoose";
const loanSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    loanTenure: { type: Number, required: true },
    employmentStatus: { type: String, required: true },
    reasonForLoan: { type: String, required: true },
    employmentAddress: { type: String, required: true },
    action: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Loan = mongoose.model("Loan", loanSchema);
export default Loan;
