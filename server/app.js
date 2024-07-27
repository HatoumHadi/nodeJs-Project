const express = require("express");
const mongoose = require('mongoose');
const connectDB = require('./connection'); // Adjusted to match your connection file
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import the users routes
const usersRouter = require("../app/src/routes/api/users"); // Corrected the path
app.use("/api/users", usersRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
