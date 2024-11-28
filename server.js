import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

// middleware
const corsOptions = {
  origin: "https://mern-employee-dir.vercel.app/" // frontend URI (ReactJS)
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});