// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {

  // CREATE SOMETHING

  // CREATE a new bookmark - WORKING
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


  //CREATE a new tag - WORKING
  app.post("/tags", function(req, res) {
   
    console.log(req.body);
   
    //find or create? (next update?)
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


  //DELETE SOMETHING

  //DELETE a tag specific to a bookmark - WORKING
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

  //DELETE a tag completely from all related bookmarks - WORKING
  app.delete("/tags_delete" ,function(req,res){
    db.bookmark_tag.destroy({
      where: { 
        tagID: req.body.id
      }
      }).then(function(result) {
        db.tag.destroy({
          where: { 
            id: req.body.id
          }
          }).then(function(result2) {
            console.log("This tag is delete")
          res.json({one: result, two: result2})
      })
    })
    });

    //DELETE a BOOKMARK - WORKING
    app.delete("/bookmark_del", function(req,res) {

      console.log("URL is " + req.body.url + " userID is " + req.body.id + " and bookmarkID is " + req.body.bookmarkID)

      db.bookmark_tag.destroy({
      where: { 
        bookmarkID: req.body.bookmarkID
      }
      }).then(function(result) {
        db.bookmark.destroy({
          where: { 
            userID: req.body.id,
            url: req.body.url,
            id: req.body.bookmarkID
          }
          }).then(function(result2) {
            console.log("This bookmark is delete")
          res.json({one: result, two: result2})
      })
      })
    })


// GET SOMETHING

  //get all tags for user

  app.get("/bookmarks", function(req, res) {
    db.bookmark.findAll()
  })

  // app.get("/tags", function(req,res) {})



  //get all bookmarks that don't have a tag
  
}