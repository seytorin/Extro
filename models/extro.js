// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Extro = sequelize.define("extro", {
 
  user_name: {
    type: Sequelize.STRING
  },
   user_age: {
    type: Sequelize.INTEGER
  },
  gender: {
    type: Sequelize.STRING
  },
  // More feilds for the profile.
  looking_for: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Extro.sync();
console.log(Extro.sync());
// Makes the Extro Model available for other files (will also create a table)
module.exports = Extro;
