// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Product = require('../product/Product');
var Product = require('./Product');

/*
// CREATES A NEW Product
router.put('/', function (req, res) {
    Product.create({
            id : req.body.id,
            name : req.body.name
        }, 
        function (err, product) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(product);
        });
});


// RETURNS ALL THE prods IN THE DATABASE
router.get('/', function (req, res) {
    Product.find({}, function (err, products) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(products);
	});
});

// GETS A SINGLE product FROM THE DATABASE
router.get('/:id', function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return res.status(500).send("There was a problem finding the products.");
        if (!Product) return res.status(404).send("No user found.");
        res.status(200).send(product);
    });
});


// UPDATES A producyt USER IN THE DATABASE
router.put('/:id', function (req, res) {
    
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, product) {
        if (err) return res.status(500).send("There was a problem updating the products.");
        res.status(200).send(product);
    });
});
*/
//export so we can find 
module.exports = router;