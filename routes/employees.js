const express = require("express");
const pool = require("../db/connection");

const router = express.Router();

// Get all employees
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees ORDER BY id ASC");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching employees");
  }
});

// Get a single employee by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM employees WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).send("Employee not found");
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching employee");
  }
});

// Add a new employee
router.post("/", async (req, res) => {
  try {
    const { name, position, level } = req.body;
    const result = await pool.query(
      "INSERT INTO employees (name, position, level) VALUES ($1, $2, $3) RETURNING *",
      [name, position, level]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error adding employee");
  }
});

// Update an employee by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position, level } = req.body;
    const result = await pool.query(
      "UPDATE employees SET name = $1, position = $2, level = $3 WHERE id = $4 RETURNING *",
      [name, position, level, id]
    );
    if (result.rows.length === 0) {
      res.status(404).send("Employee not found");
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error updating employee");
  }
});

// Delete an employee by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM employees WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      res.status(404).send("Employee not found");
    } else {
      res.status(200).send("Employee deleted successfully");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error deleting employee");
  }
});

module.exports = router;
