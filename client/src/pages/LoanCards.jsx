import React from "react";
import { User, DollarSign, PiggyBank, UserCheck, Wallet } from "lucide-react";

const LoanCards = ({ icon: Icon, value, label }) => (
  <div className="flex bg-white shadow-sm rounded-md overflow-hidden sm:w-[calc(50%-0.5rem)] lg:w-[calc(33%-0.75rem)]">
    <div className="bg-[#006e4e] p-4 flex items-center justify-center">
      <Icon size={24} color="white" />
    </div>
    <div className="p-4 flex flex-col justify-center flex-grow">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-xs uppercase text-gray-500">{label}</span>
    </div>
  </div>
);

const MetricCards = () => {
  const metrics = [
    { icon: Wallet, value: "50", label: "Loans" },
    { icon: User, value: "100", label: "Borrowers" },
    { icon: DollarSign, value: "550,000", label: "Cash Disbursed" },
    { icon: PiggyBank, value: "450,000", label: "Savings" },
    { icon: UserCheck, value: "30", label: "Repaid Loans" },
    { icon: Wallet, value: "1,000,000", label: "Cash Received" },
  ];

  return (
    <div className="flex  flex-wrap gap-4 p-4 bg-gray-100">
      {metrics.map((metric, index) => (
        <LoanCards key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricCards;
