exports.getProductById = (id) => {
  if (!id || isNaN(id)) {
    const error = new Error("Invalid product ID");
    error.status = 400;
    throw error;
  }
  return `Fetching product with ID: ${id}`;
};
