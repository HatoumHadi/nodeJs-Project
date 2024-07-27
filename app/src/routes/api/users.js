const express = require("express");
const router = express.Router();
const registerController = require('../controllers/registerController'); // Corrected the path

router.post('/', registerController.handleNewUser);

module.exports = router;
