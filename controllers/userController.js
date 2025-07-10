// controllers/userController.js

exports.getAllUsers = (req, res) => {
  res.send("Fetching all users");
};

exports.getUserById = (req, res) => {
  res.send(`Fetching user with ID: ${req.params.id}`);
};

exports.addUser = (req, res) => {
  res.send("Adding a new user");
};
