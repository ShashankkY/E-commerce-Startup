const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

userRoutes.get("/", userController.getAllUsers);
userRoutes.post("/", userController.addUser);
userRoutes.get("/:id", userController.getUserById);

module.exports = userRoutes;
