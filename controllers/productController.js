const productService = require("../services/productService");

exports.getAllProducts = (req, res, next) => {
  try {
    const data = productService.getAllProducts();
    res.send(data);
  } catch (err) {
    next(err); // pass to error handler
  }
};

exports.getProductById = (req, res, next) => {
  try {
    const data = productService.getProductById(req.params.id);
    if (!data) throw new Error("Product not found");
    res.send(data);
  } catch (err) {
    next(err);
  }
};

exports.addProduct = (req, res, next) => {
  try {
    const data = productService.addProduct(req.body);
    res.send(data);
  } catch (err) {
    next(err);
  }
};
