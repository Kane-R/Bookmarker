const router = require('express').Router();
const passport = require('passport');
const chalk = require('chalk')


// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/'); 
});

// auth with google+
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

// callback route for google to redirect to 
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {

    //console.log(chalk.blue(JSON.stringify[req.query]))
    res.redirect('/members')
});

module.exports = router;