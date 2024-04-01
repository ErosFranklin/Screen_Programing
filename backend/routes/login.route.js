const loginContoler = require("../controllers/login.controlers");
const route = require("express").Router();

route.post("/", loginContoler.login);

module.exports = route;


