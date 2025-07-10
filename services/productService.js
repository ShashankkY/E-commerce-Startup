// services/productService.js

exports.getAllProducts = () => {
  // Future: fetch from DB
  return "Fetching all products";
};

exports.getProductById = (id) => {
  // Future: fetch product from DB
  return `Fetching product with ID: ${id}`;
};

exports.addProduct = () => {
  // Future: insert product into DB
  return "Adding a new product";
};
