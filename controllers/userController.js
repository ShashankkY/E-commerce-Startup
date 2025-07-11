// controllers/userController.js
const userService = require("../services/userService");

exports.getAllUsers = (req, res, next) => {
  try {
    const users = userService.getAllUsers();
    res.send(users);
  } catch (err) {
    next(err);
  }
};

exports.addUser = (req, res, next) => {
  try {
    const result = userService.addUser(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = (req, res, next) => {
  try {
    const user = userService.getUserById(req.params.id);
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }
    res.send(user);
  } catch (err) {
    next(err);
  }
};
