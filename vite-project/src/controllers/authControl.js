import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Generate JSON Web Token


// GET Requests
export const signup_get = (req, res) => res.render('signup');
export const login_get = (req, res) => res.render('login');

// POST Signup
export const signup_post = async (req, res) => {
    const { seat_number, password } = req.body;

    try {
        const user = await User.create({ seat_number, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 });
        res.status(201).json({ user: user._id });
    } catch (err) {
        res.status(400).json({ errors: err.message });
    }
};

// POST Login
export const login_post = async (req, res) => {
    const { seat_number, password } = req.body;

    try {
        const user = await User.login(seat_number, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 });
        res.status(200).json({ user: user._id });
    } catch (err) {
        res.status(400).json({ errors: { message: err.message } });
    }
};
