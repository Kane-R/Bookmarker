const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const db = require("../models");

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        //console.log('passport callback function fired:');
        console.log(profile);
        console.log(profile.displayName);
        //console.log(accessToken);
        db.User.findOrCreate({
            where: {
                googleId: profile.id,
            },
            defaults: {
                displayName: profile.displayName,
            },
        }).then(([user], err) => {
    
            console.log(JSON.stringify(user))
           
            done(user, err);
        });
    }
));

module.exports = passport;


      