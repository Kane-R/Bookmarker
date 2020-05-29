const path = require("path")

module.exports = function(app) {

    // Main Page - includes sign up and login button
    app.get('/', function(req, res) {
        if (req.user) {
            res.redirect("/members");
          }
          res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    // Login page


    // Members page (dashboard)



}