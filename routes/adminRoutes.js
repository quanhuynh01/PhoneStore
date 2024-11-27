const express = require('express');
const route = express.Router();
const HomeController = require('../controllers/admin/HomeController');
const verifyAdmin = require('./authRoutes');//lấy func để kiếm tra quyền

// Route yêu cầu quyền admin
route.get('/', verifyAdmin, HomeController.dashBoard);


module.exports = route;