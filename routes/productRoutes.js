const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController");

productRoutes.get("/", productController.getAllProducts);
productRoutes.post("/", productController.addProduct);
productRoutes.get("/:id", productController.getProductById);

module.exports = productRoutes;
