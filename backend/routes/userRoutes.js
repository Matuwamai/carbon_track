const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userData-controller');

const router = express.Router();

// Fetch all users
router.get('/users', getAllUsers);

// Fetch a single user by ID
router.get('/users/:id', getUserById);

module.exports = router;
