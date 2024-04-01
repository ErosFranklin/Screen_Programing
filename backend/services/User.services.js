const User = require('../models/User');
const create = async (body) => {
    return User.create(body);
};

module.exports = {
    create
}