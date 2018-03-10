// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Extro = require("../models/extro.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all Extros
  app.get("/api/all", function(req, res) {

    // Finding all Extros, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Extro.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a Extro
  app.post("/api/new", function(req, res) {

    console.log("Extro Data:");
    console.log(req.body);

    Extro.create({
      user_name: req.body.user_name,
      user_age: req.body.user_age,
      gender: req.body.gender,
      looking_for: req.body.looking_for
    }).then(function(results) {
      // `results` here would be the newly created Extro
      res.end();
    });

  });

};