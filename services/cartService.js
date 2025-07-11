exports.getCartForUser = (userId) => {
  if (!userId) {
    const error = new Error("User ID is required");
    error.status = 400;
    throw error;
  }
  return `Fetching cart for user with ID: ${userId}`;
};

exports.addProductToCart = (userId, productData) => {
  if (!productData || !productData.productName) {
    const error = new Error("Product data is missing");
    error.status = 400;
    throw error;
  }
  return `Adding product to cart for user with ID: ${userId}`;
};
