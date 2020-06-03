// Requiring our models and passport as we've configured it

const db = require("../models");
const router = express.Router();

module.exports = function(app) {

  app.post("/bookmarks"), function (req,res) {
      console.log(req.body);
        // db.Post.create({
        //   title: req.body.title,
        //   body: req.body.body,
        //   category: req.body.category
        // })
        //   .then(function(dbPost) {
        //     res.json(dbPost);
        //   });
    };

}

  



