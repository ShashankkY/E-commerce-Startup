// controllers/cartController.js
const cartService = require("../services/cartService");

exports.getCartForUser = (req, res, next) => {
  try {
    const cart = cartService.getCartForUser(req.params.userId);
    if (!cart) {
      const error = new Error("Cart not found for user");
      error.status = 404;
      throw error;
    }
    res.send(cart);
  } catch (err) {
    next(err);
  }
};

exports.addProductToCart = (req, res, next) => {
  try {
    const result = cartService.addProductToCart(req.params.userId, req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};
