const express = require('express');
const route = express.Router();
const HomeController = require('../controllers/admin/HomeController');
const BrandController = require('../controllers/admin/BrandController');

const verifyAdmin = require('../middleware/auth'); 
// Áp dụng verifyAdmin cho toàn bộ các route 
route.use(verifyAdmin);

// view
route.get('/',  HomeController.dashBoard); 
route.get('/brand',  BrandController.brandViewList);

//data
route.get('/brandList',  BrandController.getBrand);



module.exports = route;