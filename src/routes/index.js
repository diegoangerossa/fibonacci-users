const express = require("express");
const { usersController, mathController } = require("../controllers");
const routes = express.Router();

routes.get("/users", usersController.getUsers);
routes.get("/users/:userId", usersController.getUserById);
routes.post("/users", usersController.createUser);
routes.put("/users/:userId", usersController.updateUser);
routes.delete("/users/:userId", usersController.deleteUser);

routes.get("/fibonacci", mathController.getFibonacci);


module.exports = {
    routes
};