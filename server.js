// NPM packages
const express = require("express");
const session = require("express-session");
const passport = require('./config/passport');
const exphbs = require('express-handlebars');
const chalk = require('chalk')
const path = require("path");
let app = express();
const keys = require('./config/keys');
const authRoutes = require('./routes/auth-routes');

// set view engine
//app.set('view engine', 'ejs');

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// set up auth routes 
app.use('/auth', authRoutes);

//Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success

//db.sequelize.sync({force:false}).then(function() {
  app.listen(PORT, function() {
    console.log(chalk.bold.blue("🌎 Listening on port %s. "), chalk.bold.yellow(PORT) + chalk.bold.green("\nVisit ") + chalk.bold.blue("http://localhost:") + chalk.bold.yellow(PORT) + chalk.bold.blue("/") + chalk.bold.green(" in your browser"));
  });
// });

