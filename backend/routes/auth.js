const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/user'); // Assuming you have a User model defined

// @route   POST /api/auth/signup
// @desc    Register a new user
router.post('/signup', [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            console.log('Signup attempt failed: User already exists with email:', email);
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create a new user
        user = new User({
            username,
            email,
            password // No need to hash here, it is handled in the User model
        });

        await user.save();
        console.log('User successfully signed up:', user);

        // Create a payload for JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        // Sign the JWT token
        jwt.sign(
            payload,
            'zain', // Replace with your actual secret
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error('Signup server error:', err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check for existing user
        let user = await User.findOne({ email });
        if (!user) {
            console.log('Login failed: User not found with email:', email);
            return res.status(400).json({ msg: 'Invalid login credentials' });
        }

        // Log the password being compared
        console.log('Password entered:', password);
        console.log('Hashed password from DB:', user.password);

        // Check if password matches
        const isMatch = await user.comparePassword(password);
        console.log('Password comparison result:', isMatch);

        if (!isMatch) {
            console.log('Login failed: Password mismatch for user:', email);
            return res.status(400).json({ msg: 'Invalid login credentials' });
        }

        console.log('Login successful for user:', email);

        // Create a payload for JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        // Sign the JWT token
        jwt.sign(
            payload,
            'zain', // Replace with your actual secret
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error('Login server error:', err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
