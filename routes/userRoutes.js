const express = require('express');
const route = express.Router();
const HomeController = require('../controllers/user/HomeController');
const AccountController = require('../controllers/user/AccountController');
const PhoneController = require('../controllers/user/PhoneController');
const getCategoriesMiddleware = require('../middleware/shareCategory');

route.use(getCategoriesMiddleware);  // Chia sẻ Middleware

//route
route.get('/login',AccountController.LoginView);
route.get('/',HomeController.Index);
route.get('/register',AccountController.RegisterView);
 

route.post('/register',AccountController.handleRegisterPost);
route.post('/login',AccountController.handleLoginPost);
 
route.get('/phone',PhoneController.getViewPhone);

route.get('/:slug',PhoneController.getPhoneByCategory);
 
module.exports = route;