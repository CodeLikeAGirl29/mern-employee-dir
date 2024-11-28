import { Pool } from "pg";

const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432, // Default PostgreSQL port
});

pool.on("connect", () => {
  console.log("Connected to PostgreSQL!");
});

pool.on("error", (err) => {
  console.error("PostgreSQL connection error:", err);
  process.exit(1);
});

export default pool;
