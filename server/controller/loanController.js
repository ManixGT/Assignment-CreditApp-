import Loan from "../model/Loans.js"; // Update the path as needed

export const applyLoan = async (req, res) => {
  try {
    const {
      fullName = "",
      loanAmount = 0,
      loanTenure = 0,
      employmentStatus = "",
      reasonForLoan = "",
      employmentAddress = "",
    } = req.body; // Type assertion for safety

    if (
      !fullName ||
      !loanAmount ||
      !loanTenure ||
      !employmentStatus ||
      !reasonForLoan ||
      !employmentAddress
    ) {
      console.log("Missing required fields");
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const newLoan = new Loan({
      fullName,
      loanAmount,
      loanTenure,
      employmentStatus,
      reasonForLoan,
      employmentAddress,
      action: "pending", // Assuming default value
    });
    await newLoan.save();
    res
      .status(201)
      .json({ message: "Loan application submitted successfully!" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        error: "An error occurred while submitting the application.",
        details: error.message,
        stack: error.stack,
      });
    } else {
      // If the error is not an instance of Error, handle it accordingly
      res.status(500).json({
        error: "An unknown error occurred.",
      });
    }
  }
};

export const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find(); // Explicitly type loans array
    res.json(loans);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching loans:", error); // Detailed error logging
      res
        .status(500)
        .json({ error: "An error occurred while fetching loans." });
    } else {
      // If the error is not an instance of Error, handle it accordingly
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
};
