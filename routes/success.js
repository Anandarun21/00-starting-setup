const express = require('express');
const successController = require('../controllers/success');
const router = express.Router();

// Handle GET requests to /success
router.get('/', successController.getSuccessMessage);

// Handle POST requests to /success
router.post('/', successController.postSuccessMessage);

module.exports = router;
