const User = require('../models/User.js');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        console.log('All users:', JSON.stringify(users, null, 2));
        res.status(200).json({ success: true, data: users });
    } catch(error) {
        next(error);
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user});
    } catch(error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    createUser,
}