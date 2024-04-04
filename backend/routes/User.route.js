const route = require('express').Router();
const Usercontroller = require('../controllers/User.controller');

route.post('/', Usercontroller.create);

module.exports = route;