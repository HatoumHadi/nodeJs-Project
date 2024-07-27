const mongoose = require('mongoose');
const express = require('express');
const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hadihatouma:yZF3QzdZS1rkiiIr@e-app.vszuydr.mongodb.net/?retryWrites=true&w=majority&appName=e-app', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

// Connect to MongoDB
connectDB();

app.use('/register', require('../app/src/routes/api/users')); // Corrected the path

module.exports = app;
