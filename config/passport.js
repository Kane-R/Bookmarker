const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const db = require("../models");
const chalk = require("chalk")
const fs = require("fs")

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        //console.log('passport callback function fired:');
       // console.log(chalk.red(JSON.stringify(profile, null, 2)));
       // console.log(chalk.yellow(profile.displayName));
       // console.log(chalk.green(profile.photos[0].value));
        //console.log(accessToken);

        db.user.findOrCreate({
            where: {
                googleId: profile.id,
            },
            defaults: {
                displayName: profile.displayName,
                avatar: profile.photos[0].value

            },
        }).then(([user], err) => {
           //console.log(chalk.blue(JSON.stringify(user)))
            
            const patron = {
                id: user.id,
                name: user.displayName,
                avatar: user.avatar
            } 
            const patronString = JSON.stringify(patron)

            fs.writeFile('./public/details.json', patronString, err => {
                if (err) {
                    console.log('Error has occurred with Write JSON file')
                } else {
                    console.log('Success, JSON File has been written')
                }
            })
            return done(err, user);
        });
    }

));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});


module.exports = passport;


      