// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {

  // POST route for saving a new bookmark - WORKING
  app.post("/bookmarks", function(req, res) {
    console.log(req.body);
    db.bookmark.create({
      url: req.body.url,
      userID: req.body.userID
    })
      .then(function(dbBookmark) {
        res.json(dbBookmark);
      });
  });


  //add tags - Need to define bookmark relation - WORKING
  app.post("/tags", function(req, res) {
   
    console.log(req.body);
   
    //find or create?
    db.tag.create({
      name: req.body.name
    })
      .then(function(dbTag) {
        res.json(dbTag);
      });

      db.bookmark_tag.create({
        bookmarkID: req.body.bookID,
        tagID: req.body.tagID
      }).then(function(dbTag) {        
          res.json(dbTag);
        });
  });

  //delete a tag completely from all related bookmarks

  // app.delete("/tags_delete", function(req, res) {
    
  //   console.log(req.body.id)
    
  //   db.Tag.destroy({
  //     where: {
  //       id: req.body.id
  //   }
  // })
  //   .then(function(dbTag) {
  //     res.json(dbTag);
  //   });
  // });

  //delete a tag specific to a bookmark - WORKING
  app.delete("/bookmark_tags", function(req,res) {

    db.bookmark_tag.destroy({
      where: {
        tagID: req.body.tagID,
        bookmarkID: req.body.bookmarkID
      }
    })
    .then(function(dbBookmark_Tag) {
      res.json(dbBookmark_Tag)
    })

  })

    //delete a tag specific to a bookmark
    app.delete("/bookmark_del", function(req,res) {

      console.log("this is userID: " + req.body.id + " this is url: " +req.body.url)
      db.bookmark.destroy({
        where: {
          userID: req.body.id,
          url: req.body.url
        }
      })
      .then(function(dbBookmark) {
        res.json(dbBookmark)
      })
  
    })

  app.get("/bookmark_tags", function(req,res) {

    db.bookmark_tag.findOne({
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
    db.bookmark.findAll()
  })

  // app.get("/tags", function(req,res) {})



  //get all bookmarks that don't have a tag
  
}