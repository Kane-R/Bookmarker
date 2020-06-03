// Requiring our models and passport as we've configured it

const db = require("../models");



module.exports = function(app) {

// POST route for saving a new bookmark
  app.post("/bookmarks", function(req, res) {
    console.log(req.body);
    console.log(req.body.url);
    db.Bookmark.create({
      url: req.body.url,
      userID: req.body.userID
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
}


















  // //route to sign up user
  // router.post("/api/signup", function(req,res) {
  //   db.user.create({
      
  //   })
  // });

  // router.post("/api/signup", function(req,res) {
  //   db.user.create({
      
  //   })

  // });

  // //route for logging out
  // router.post("/api/login"), function(req,res) {
    
  // };

  // router.post("/api/login"), function(req,res) {
    
  // };

  // //route for getting user data

  //   //routes 
  //   router.get("/api/bookmarks"), function (req,res) {
  //     db.model.findAll();
  //   };
  

