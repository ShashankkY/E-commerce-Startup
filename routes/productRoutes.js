const express = require("express");
const productRoutes = express.Router();

// GET /products
productRoutes.get("/", (req, res) => {
  res.send("Fetching all products");
});

// POST /products
productRoutes.post("/", (req, res) => {
  res.send("Adding a new product");
});

// GET /products/:id
productRoutes.get("/:id", (req, res) => {
  res.send(`Fetching product with ID: ${req.params.id}`);
});

module.exports = productRoutes;
