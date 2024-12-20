const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    campanyname: {
        type: String,
        unique: true,
        required:true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    regnumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        // unique: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin ',],//only allow 'user' or 'admin' role
        default: 'user'
    }

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

