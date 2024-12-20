const express = require("express");
// const {route} =require('./auth-routes');
const router = express.Router()
const authMiddleware =require('../midddleware/auth-middleware');

router.get('/welcome', authMiddleware, (req, res)=>{
    const {regnumber, userId, role } = req.userInfo;
    res.json({
        message : 'Welcome to the home page',
        user: {
            _id : userId,
            regnumber,
            role

        }
    })
});

module.exports = router 