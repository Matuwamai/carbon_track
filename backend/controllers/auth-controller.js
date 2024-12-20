const User = require('../models/User'); // Import your User model
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken');


// User registration function
const registerUser = async (req, res) => {
    try {
        const { campanyname, regnumber, username, email, password, role } = req.body;

        // Check if the user already exists
        const checkExistingUser = await User.findOne({ $or: [{ username }, { email }, { regnumber }] });
        if (checkExistingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with the same username or email.'
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user
        const newlyCreatedUser = new User({
            campanyname,
            regnumber,
            username,
            email,
            password: hashedPassword,
            role: role || 'user'
        });

        await newlyCreatedUser.save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully!'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again.'
        });
    }
};

// User login function
const loginUser = async (req, res) => {
    try {
        const { regnumber, password } = req.body;

        // Check if the user exists by registration number
        const user = await User.findOne({ regnumber,  });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid password'
            });
        }
        // bearer
        // create user  token
        const accessToken = jwt.sign({
            userId: user._id,
            regnumber: user.regnumber,
            role: user.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1m'
        })
        // // Return success response
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            accessToken
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again.'
        });
    }
};

// Export the functions
module.exports = {
    registerUser,
    loginUser
};
