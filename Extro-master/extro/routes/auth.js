var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

// Requests signup page
app.get('/signup', authController.signup);

// Requests signin page
app.get('/signin', authController.signin);

// Redirects to page upon auth check
app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/profile',
                                                    failureRedirect: '/signup'}
                                                    ));

// Gets profile if logged in
app.get('/profile', isLoggedIn, authController.profile);


// Redirects to page upone auth check
app.post('/profile', passport.authenticate('local-signup',  { successRedirect: '/chat',
                                                    failureRedirect: '/profile'}
                                                    ));
// Gets chat if logged in 
app.get('/chat',isLoggedIn, authController.chat);

//Requests logout
app.get('/logout',authController.logout);

// Redirects to page upon auth check
app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/profile',
                                                    failureRedirect: '/signup'}
                                                    ));


// Checks if logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}

console.log("auth.js is working");