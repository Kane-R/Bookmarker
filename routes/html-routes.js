const path = require("path")
const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
        res.render('index', {layout: 'main' })
      }); 


    // Login page


    // Members page (dashboard)


module.exports = router;

