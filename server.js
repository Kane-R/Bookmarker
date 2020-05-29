// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const exphbs = require('express-handlebars');
const chalk = require('chalk')

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
//required for post and put requests recognises both strings or arrays (middleware)
app.use(express.urlencoded({ extended: true }));
//required for post and put requests recognises JSON objects (middleware)
app.use(express.json());
//hides data 
app.use(express.static("public"));


// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

<<<<<<< Updated upstream
// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get('/', function (req, res) {
  res.render('home');
}); // need to move to controller folder

=======
// // Set Handlebars.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
>>>>>>> Stashed changes

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(chalk.bold.blue("🌎  Listening on port %s. "), chalk.bold.yellow(PORT) + chalk.bold.green("\nVisit ") + chalk.bold.blue("http://localhost:") + chalk.bold.yellow(PORT) + chalk.bold.green(" in your browser"));
  });
});
