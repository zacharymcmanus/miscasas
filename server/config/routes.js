const mongoose = require('mongoose');
var rentalsController = require('./../controllers/rentals.js');

module.exports = function(app){
    // Process new user registration request
    app.post('/api/register', (req, res) => {
        rentalsController.registerUser(req, res);
    });

    // Process existing user login request
    app.post('/api/login', (req, res) => {
        rentalsController.loginUser(req, res);
    });

    // Retrieve user info by ID
    app.get('/api/user/:id', (req, res) => {
        rentallsController.findUserById(req, res);
    });

    // Process new job posting
    app.post('/api/properties', (req, res) => {
        console.log(req.body);
        rentalsController.createProperty(req, res);
    });

    // Retrieve all properties
    app.get('/api/properties', (req, res) => {
        rentalsController.getAllProperties(req, res);
    })

}