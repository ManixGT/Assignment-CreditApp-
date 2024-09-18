import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./connectivity.js";
import router from "./routes/loans.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(router);

// Connect to MongoDB
connectDB(); // Ensure the function correctly connects to MongoDB

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
