'use strict';

var express = require('express');
var controller = require('./bears.controller');

var router = express.Router();

// affecting multiple items
router.post('/', controller.create); 
router.get('/', controller.findAll);

// affecting single items
router.get('/:id', controller.findById);

module.exports = router;
