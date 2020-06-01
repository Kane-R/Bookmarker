// Requiring our models and passport as we've configured it

const express = require("express");
const router = express.Router();


const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {

  //route to sign up user

  app.post("/api/signup", function(req,res) {
    db.user.create({
      
    })

  });

  //route for logging out

  app.post("/api/login"), function(req,res) {
    
  };

  //route for getting user data


  // ##### route for adding bookmark - KR  #######
  router.post("/addBookmark"), function(req, res) {

  };

//   router.post("/newBurger", function (req, res) {

//     burgers.create(req.body.title, function (result){
//     let burgerID = result.insertId;
//     let ingredientList = []
//     ingredientList = req.body.Topping;
//     ingredientList.push(req.body.Sauce);
//     ingredientList.push(req.body.Patty);
//     ingredients.create(ingredientList, burgerID, function (result2) {
//       // console.log(result1.insertId);
//         res.json({ id: result2 });
//      })
//    })
//  });


  //routes 


}

// }


// module.exports = function(app) {
//   // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, send them to the members page.
//   // Otherwise the user will be sent an error
//   app.post("/api/login", passport.authenticate("local"), function(req, res) {
//     res.json(req.user);
//   });

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/signup", function(req, res) {
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password
//     })
//       .then(function() {
//         res.redirect(307, "/api/login");
//       })
//       .catch(function(err) {
//         res.status(401).json(err);
//       });
//   });

//   // Route for logging user out
//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
//   });

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });
// };
