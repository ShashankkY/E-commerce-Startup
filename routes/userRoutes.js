const express = require("express");
const userRoutes = express.Router();

// GET /users
userRoutes.get("/", (req, res) => {
  res.send("Fetching all users");
});

// POST /users
userRoutes.post("/", (req, res) => {
  res.send("Adding a new user");
});

// GET /users/:id
userRoutes.get("/:id", (req, res) => {
  res.send(`Fetching user with ID: ${req.params.id}`);
});

module.exports = userRoutes;
