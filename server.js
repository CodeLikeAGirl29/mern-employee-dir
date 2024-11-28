import express from "express";
import cors from "cors";
import records from "./routes/records.js"; // Import the updated records route
import db from "./db/connection.js"; // Import the PostgreSQL connection
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5050; // Use port from .env or default to 5050
const app = express();

// Middleware
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Frontend URI
};
app.use(cors(corsOptions)); // Enable CORS with specific origin
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Test database connection
db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1); // Exit if the database connection fails
  });

// Routes
app.use("/record", records); // Route for handling records

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Graceful shutdown for database connection
process.on("SIGINT", () => {
  db.end(() => {
    console.log("Database connection closed");
    process.exit(0);
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
