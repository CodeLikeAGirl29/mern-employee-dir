const express = require("express");
const cors = require("cors");
require("dotenv").config();
const employeesRoute = require("./routes/employees");

const app = express();
const PORT = process.env.PORT || 5050;

const cors = require("cors");

app.use(cors({
  origin: "https://mern-employee-dir.vercel.app", // Your frontend's deployed URL
}));


// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/employees", employeesRoute);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Employees Directory API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
