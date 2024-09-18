"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectivity_1 = require("./connectivity");
const loans_1 = require("./routes/loans");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(loans_1.default);
// Connect to MongoDB
(0, connectivity_1.default)(); // Establish MongoDB connection
const PORT = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
