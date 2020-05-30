const path = require("path")
const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        layout: 'main'
    })
});


// Main Page - includes sign up and login button
// app.get('/', function(req, res) {
//     if (req.user) {
//          res.redirect("/members");
//        }
//        //set to members while developing - remember to change this
//       res.sendFile(path.join(__dirname, "../public/member.html"));
// });


// Login page

app.get('/login', function (req, res) {
    if (req.user) {
        res.redirect("/members");
    }
    //set to members while developing - remember to change this
    res.sendFile(path.join(__dirname, "../public/login.html"));
});


// Members page (dashboard)

app.get('/dashboard', function (req, res) {
    if (req.user) {
        res.redirect("/members");
    }
    //set to members while developing - remember to change this
    res.sendFile(path.join(__dirname, "../public/member.html"));
});

// 


module.exports = router;
