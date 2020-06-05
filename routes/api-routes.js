// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {

  // POST route for saving a new bookmark - WORKING
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
  // app.delete("/bookmarks", function(req, res) {
  //   db.Bookmark.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbBookmark) {
  //     res.json(dbBookmark);
  //   });
  // });


  //add tags - Need to define bookmark relation - WORKING
  app.post("/tags", function(req, res) {
   
    console.log(req.body);
   
    //find or create?
    db.Tag.create({
      name: req.body.name
    })
      .then(function(dbTag) {
        res.json(dbTag);
      });

      db.Bookmark_Tag.create({
        bookmarkID: req.body.bookID,
        tagID: req.body.tagID
      }).then(function(dbTag) {        
          res.json(dbTag);
        });
  });

  // //add bookmark_tags - Need to define bookmark relation
  // app.post("/tags", function(req, res) {
   
  
  // });

  //add tag in relation to bookmark



  //delete a tag completely from all related bookmarks

  app.delete("/tags/:id", function(req, res) {
    
    db.Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbTag) {
      res.json(dbTag);
    });
  });

  //delete a tag specific to a bookmark - WORKING
  app.delete("/bookmark_tags", function(req,res) {

    db.Bookmark_Tag.destroy({
      where: {
        tagID: req.body.tagID,
        bookmarkID: req.body.bookmarkID
      }
    })
    .then(function(dbBookmark_Tag) {
      res.json(dbBookmark_Tag)
    })

  })

  app.get("/bookmark_tags", function(req,res) {

    db.Bookmark_Tag.findOne({
      where: {
        tagID: req.body.tagID
      }
    })
    .then(function(dbBookmark_Tag) {
      res.json(dbBookmark_Tag)
    })

  })

  //get all tags for user

  app.get("/bookmarks", function(req, res) {
    db.Bookmark.findAll()
  })

  // app.get("/tags", function(req,res) {})



  //get all bookmarks that don't have a tag
  


}


