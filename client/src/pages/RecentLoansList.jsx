import React, { useEffect, useState } from "react";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecentLoansList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loansData, setLoansData] = useState([]);
  const loansPerPage = 7;

  const indexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
  const currentLoans = loansData.slice(indexOfFirstLoan, indexOfLastLoan);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fetchLoans = async () => {
    try {
      const response = await fetch("http://localhost:3000/loans", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLoansData(data); // Ensure it's an array
      toast.success("Loans data fetched successfully!");
    } catch (error) {
      toast.error("Error fetching loans data: " + error.message);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Applied Loans</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500 cursor-pointer">Sort</span>
          <span className="text-sm text-gray-500 cursor-pointer">Filter</span>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-center text-sm text-gray-500">
            <th className="pb-2 text-left">User Id</th>
            <th className="pb-2">Amount Asked</th>
            <th className="pb-2">Customer Name</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Action</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {currentLoans.length > 0 ? (
            currentLoans.map((loan) => (
              <tr key={loan._id} className="border-t border-gray-100">
                <td className="py-3 flex items-center">
                  <img
                    src={loan.avatar || "placeholder-avatar-url"}
                    alt={loan.customerName}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="text-sm text-gray-600">{loan._id}</span>
                </td>
                <td className="py-3 text-sm">{loan?.loanAmount || "N/A"}</td>
                <td className="py-3 text-sm">{loan?.fullName || "N/A"}</td>
                <td className="py-3 text-sm text-gray-500">
                  {new Date(loan.createdAt).toLocaleDateString() || "N/A"}
                </td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs text-white ${
                      loan.action === "pending"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {loan.action === "pending" ? "Pending" : "Approved"}
                  </span>
                </td>
                <td className="py-3">
                  <MoreVertical
                    size={16}
                    className="text-gray-400 cursor-pointer"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No loans available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Rows per page: {loansPerPage}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {indexOfFirstLoan + 1}-{Math.min(indexOfLastLoan, loansData.length)}{" "}
            of {loansData.length}
          </span>
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft size={20} className="text-gray-500" />
          </button>
          <button
            onClick={() =>
              paginate(
                Math.min(
                  Math.ceil(loansData.length / loansPerPage),
                  currentPage + 1
                )
              )
            }
            disabled={indexOfLastLoan >= loansData.length}
            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight size={20} className="text-gray-500" />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecentLoansList;
