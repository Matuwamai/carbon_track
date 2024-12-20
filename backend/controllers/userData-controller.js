const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Exclude passwords
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error });
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id, '-password'); // Exclude passwords
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch user", error });
    }
};

// Export the controller methods
module.exports = {
    getAllUsers,
    getUserById,
};
