import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbURI = "mongodb://localhost:27017/creditApp";
    await mongoose.connect(dbURI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error connecting to MongoDB:", error.message);
    } else {
      console.error("Error connecting to MongoDB:", error);
    }
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
