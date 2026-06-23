const User = require('../models/User.js');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        console.log('All users:', JSON.stringify(users, null, 2));
        res.status(200).json({ success: true, data: users });
    } catch(error) {
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user});
    } catch(error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ success: false, error: 'Email already registered' });
        }
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        await user.destroy();

        res.status(200).json({
            success: true,
            message: `User with ID ${id} has been deleted`
        });

    } catch(error) {
        next(error);
    }
}

const updateUsername = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if (!username || username.trim() === '') {
            return res.status(400).json({
                success: false,
                error: 'Username cannot be empty'
            });
        }

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }
        
        lastUsername = user.username
        user.username = username;
        await user.save();

        res.status(200).json({
            success: true,
            message: `User ${lastUsername} has been changed to ${username}`
        });

    } catch(error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    updateUsername,
}