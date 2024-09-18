import React from "react";
import RecentLoansList from "./RecentLoansList";
import LoanCards from "./LoanCards";

const Loans = () => {
  return (
    <>
      <LoanCards />
      <RecentLoansList />
    </>
  );
};

export default Loans;
