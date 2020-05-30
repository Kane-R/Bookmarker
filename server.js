// NPM packages
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const exphbs = require('express-handlebars');
const chalk = require('chalk')
const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
const routes = require("./routes/html-routes.js");
app.use("/", routes);
//require("./routes/api-routes.js")(app);

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(chalk.bold.blue("🌎  Listening on port %s. "), chalk.bold.yellow(PORT) + chalk.bold.green("\nVisit ") + chalk.bold.blue("http://localhost:") + chalk.bold.yellow(PORT) + chalk.bold.green(" in your browser"));
  });
});
