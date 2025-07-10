const express = require("express");
const cartRoutes = express.Router();

// GET /cart/:userId
cartRoutes.get("/:userId", (req, res) => {
  res.send(`Fetching cart for user with ID: ${req.params.userId}`);
});

// POST /cart/:userId
cartRoutes.post("/:userId", (req, res) => {
  res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
});

module.exports = cartRoutes;
