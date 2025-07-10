// controllers/productController.js

const productService = require("../services/productService");

exports.getAllProducts = (req, res) => {
  const message = productService.getAllProducts();
  res.send(message);
};

exports.getProductById = (req, res) => {
  const message = productService.getProductById(req.params.id);
  res.send(message);
};

exports.addProduct = (req, res) => {
  const message = productService.addProduct();
  res.send(message);
};
