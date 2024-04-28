const express = require('express');
const {sendMessage} = require('../controllers/messageControllers');

const router = express.Router();

router.post('/contact', sendMessage);

module.exports = router;
