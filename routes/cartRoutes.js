const express = require("express");
const cartRoutes = express.Router();
const cartController = require("../controllers/cartController");

cartRoutes.get("/:userId", cartController.getCartForUser);
cartRoutes.post("/:userId", cartController.addProductToCart);

module.exports = cartRoutes;
