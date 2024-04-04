const loginController = require("../controllers/login.controller");
const route = require("express").Router();

route.post("/", loginController.login);

module.exports = route;


