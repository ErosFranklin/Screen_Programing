const route = require('express').Router();
const Usercontrole = require('../controllers/User.controle');

route.post('/', Usercontrole.create);

module.exports = route;