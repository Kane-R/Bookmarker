const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const db = require("../models");
const chalk = require("chalk")

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        //console.log('passport callback function fired:');
        console.log(chalk.red(profile));
        console.log(chalk.yellow(profile.displayName));
        //console.log(accessToken);
        db.User.findOrCreate({
            where: {
                googleId: profile.id,
            },
            defaults: {
                displayName: profile.displayName,
            },
        }).then(([user], err) => {
            console.log(chalk.blue(JSON.stringify(user.id)))
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


      