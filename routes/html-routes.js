const path = require("path")
const express = require("express");
const router = express.Router();
const db = require("../models");
const chalk = require('chalk')



//Login page
// create home route
router.get('/', function (req, res) {
    if (req.user) {
        res.redirect("/members");
    }
    //set to members while developing - remember to change this
    res.render('home');
});


// Members page (dashboard)
router.get('/members', function (req, res) {
    if (req.user) {
        res.redirect("/members");
    }
    db.Bookmark.findAll({
        attributes: ['url']
    }).then((bookmark) => {
        let bookm = JSON.parse(JSON.stringify(bookmark));
        console.log(chalk.green(bookm) + "\n")

            db.Tag.findAll({
                attributes: ['name']
            }).then((tag) => {
                let atag = JSON.parse(JSON.stringify(tag));
                console.log(chalk.magenta(atag) + "\n")

                db.User.findAll({
                    attributes: ['name']
                }).then((user) => {
                    let user1 = JSON.parse(JSON.stringify(user));
                    console.log(chalk.blue(user) + "\n")

                    const completeArray = { 
                        bookm, atag, user1
                    }

                    console.log(completeArray)

                    res.render('index', completeArray);
                })
        })
    })
});




module.exports = router;
