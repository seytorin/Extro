var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/signup', authController.signup);


// app.get('/signin', authController.signin);


app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/profile',
                                                    failureRedirect: '/signup'}
                                                    ));


app.get('/profile', isLoggedIn, authController.profile);



app.post('/profile', passport.authenticate('local-signup',  { successRedirect: '/chat',
                                                    failureRedirect: '/signup'}
                                                    ));

app.get('/chat',isLoggedIn, authController.chat);



app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/profile',
                                                    failureRedirect: '/signin'}
                                                    ));



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}

console.log("auth.js is working");