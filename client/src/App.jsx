import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Loans from "./pages/Loans";
import Form from "./pages/Form";
import DashboardCards from "./pages/DashboardCards";
import RecentLoansList from "./pages/RecentLoansList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<DashboardContent />} />
          <Route path="loans" element={<Loans />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </Router>
  );
}

function DashboardContent() {
  return (
    <>
      <DashboardCards />
      <RecentLoansList />
    </>
  );
}

export default App;
