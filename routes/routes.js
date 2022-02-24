/* jshint node: true */
'use strict';

const express = require('express');
const mainController = require('../controllers/main');

const router = express.Router();

router.get('/search', mainController.search);

module.exports = router;