// Renders pages based on requests
var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('signup'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}


exports.profile = function(req,res){

	res.render('profile'); 

}

exports.chat = function(req,res){

	res.render('chat'); 

}



exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}

console.log("authcontroller working");