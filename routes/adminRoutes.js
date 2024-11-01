const express = require('express');
const route = express.Router();
const HomeController = require('../controllers/admin/HomeController');

route.get('/',HomeController.dashBoard);

module.exports = route;