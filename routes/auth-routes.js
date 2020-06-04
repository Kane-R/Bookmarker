const router = require('express').Router();
const passport = require('passport');
const chalk = require('chalk')
const db = require("../models");


// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

// callback route for google to redirect to 
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    console.log("authroutes");
    console.log("----");
    //db.User.create('users').then(result => console.log (chalk.green(result.id)));

    console.log(chalk.blue(JSON.stringify[req.query]))
    res.redirect('/members/:id')
});

module.exports = router;