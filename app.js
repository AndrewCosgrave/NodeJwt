// app.js
var express = require('express');
var app = express();
var db = require('./db'); 

// tell app.js about controllers 
var UserController = require('./user/UserController');
app.use('/user', UserController);

//authentication controller
var AuthController = require('./auth/AuthController');
app.use('/auth', AuthController);

//authentication controller
var ProductController = require('./product/ProductController');
app.use('/product', ProductController);

module.exports = app;