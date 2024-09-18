import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    loanAmount: "",
    loanTenure: "",
    employmentStatus: "",
    reasonForLoan: "",
    employmentAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/apply-loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFormData({
        fullName: "",
        loanAmount: "",
        loanTenure: "",
        employmentStatus: "",
        reasonForLoan: "",
        employmentAddress: "",
      });

      // Show success toast
      toast.success(data.message || "Loan application submitted successfully!");
    } catch (error) {
      // Show error toast
      toast.error("Error submitting form: " + error.message);
    }
  };

  return (
    <div className="w-5/6 mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-6">APPLY FOR A LOAN</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-x-8 gap-y-9"
      >
        <div>
          <label
            htmlFor="fullName"
            className="block text-lg text-left font-medium text-gray-700 mb-1"
          >
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Full name as it appears on bank account"
          />
        </div>
        <div>
          <label
            htmlFor="loanAmount"
            className="block text-lg text-left font-medium text-gray-700 mb-1"
          >
            Amount Need?
          </label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Amount"
          />
        </div>
        <div>
          <label
            htmlFor="loanTenure"
            className="block text-lg text-left font-medium text-gray-700 mb-1"
          >
            Loan tenure (in months)
          </label>
          <input
            type="text"
            id="loanTenure"
            name="loanTenure"
            value={formData.loanTenure}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Loan tenure (in months)"
          />
        </div>
        <div>
          <label
            htmlFor="employmentStatus"
            className="block text-lg text-left font-medium text-gray-700 mb-1"
          >
            Employment status
          </label>
          <input
            type="text"
            id="employmentStatus"
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Employment status"
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="reasonForLoan"
            className="block text-lg text-left font-medium text-gray-700 mb-1"
          >
            Reason for loan
          </label>
          <textarea
            id="reasonForLoan"
            name="reasonForLoan"
            value={formData.reasonForLoan}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Reason for loan"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="employmentAddress"
            className="block text-lg text-left font-medium text-gray-700 mb-1"
          >
            Employment address
          </label>
          <input
            type="text"
            id="employmentAddress"
            name="employmentAddress"
            value={formData.employmentAddress}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Employment address"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-400 text-black font-semibold my-7 p-2.5 rounded-lg hover:bg-green-600 hover:text-blue-900"
        >
          Submit
        </button>
      </form>
      {/* Toast container for displaying toasts */}
      <ToastContainer />
    </div>
  );
};

export default LoanApplicationForm;
