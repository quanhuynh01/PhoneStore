const express = require('express');
const route = express.Router();
const HomeController = require('../controllers/user/HomeController');
const AccountController = require('../controllers/user/AccountController');

//route
route.get('/login',AccountController.LoginView);
route.get('/',HomeController.Index);
route.get('/register',AccountController.RegisterView);
 

route.post('/register',AccountController.handleRegisterPost);
route.post('/login',AccountController.handleLoginPost);
 
 
module.exports = route;