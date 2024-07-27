// models/user.js
const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Admin: Number,
    },
    refreshToken: String,
});


module.exports = mongoose.model('User', userSchema);