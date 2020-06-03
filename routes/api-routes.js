// Requiring our models and passport as we've configured it

const db = require("../models");



module.exports = function(app) {

  // POST route for saving a new bookmark
  app.post("/bookmarks", function(req, res) {
    console.log(req.body);
    db.Bookmark.create({
      url: req.body.url,
      userID: req.body.userID
    })
      .then(function(dbBookmark) {
        res.json(dbBookmark);
      });
  });

  // delete a bookmark
  app.delete("/bookmarks/:id", function(req, res) {
    db.Bookmark.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  });


  //add tags - Need to define bookmark relation
  app.post("/tags", function(req, res) {
    console.log(req.body);
    db.Tag.create({
      name: req.body.name,
      userID: req.body.userID
    })
      .then(function(dbTag) {
        res.json(dbTag);
      });
  });

  //add tag in relation to bookmark



  //delete a tag completely from all related bookmarks

  app.delete("/tags/:id", function(req, res) {
    db.Bookmark.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  });



  //delete a tag specific to a bookmark






  //get all tags for user

  app.get("/tags", function(req, res) {
    
  })



  //get all bookmarks that don't have a tag
  


}


