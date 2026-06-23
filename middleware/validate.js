function validateUser (req, res, next) {
    const { username, email } = req.body;
    const errors = [];

    if (!username) {
        errors.push('Username cannot be empty');
    } else if (typeof username !== 'string') {
        errors.push('Username must be text');
    } else if (username.trim().length < 3) {
        errors.push('Username must be 3 characters or more');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        errors.push('Email cannot be empty');
    } else if (typeof email !== 'string') {
        errors.push('Email must be text');
    } else if (!emailRegex.test(email.trim())) {
        errors.push('Invalid email format');
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors: errors
        });
    }

    next();
}

module.exports = validateUser;