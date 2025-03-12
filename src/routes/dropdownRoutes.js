const express = require('express');
const { DropdownController } = require('../controllers');

const router = express.Router();

router.get('/dropdown', DropdownController.dropDown);

module.exports = router;
