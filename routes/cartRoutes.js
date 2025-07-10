const express = require("express");
const cartRoutes = express.Router();
const cartController = require("../controllers/cartController");

cartRoutes.get("/:userId", cartController.getCartByUserId);
cartRoutes.post("/:userId", cartController.addToCart);


module.exports = cartRoutes;
