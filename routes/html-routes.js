const path = require("path")
const express = require("express");
const db = require("../models");
const chalk = require('chalk')

module.exports = function(app){

    //Login page
    // create home route
    app.get('/', function (req, res) {
        // if (req.user) {
        //     res.redirect("/members");
        // }
        //set to members while developing - remember to change this
       
        res.render('home');
    });

    // Members page (dashboard)
    app.get('/members', function (req, res) {

        
        
        const query = {
            id: 2 
        }
        db.User.findOne({
           where: query,
           include: [
            {
                model: db.Bookmark,
                include: [
                    {
                        model: db.Tag,
                    }
                ],
        }]
       }).then((user)=>{

        const result = JSON.parse(JSON.stringify(user))
           //res.json(user)
           res.render('index', result)
       })
    });

}


        //     db.Bookmark.findAll({
        //     attributes: ['url']
        // })
        // .then((bookmark) => {
        //     let bookm = JSON.parse(JSON.stringify(bookmark));
        //     console.log(chalk.green(bookm) + "\n")

        //         db.Tag.findAll({
        //             attributes: ['name']
        //         })
        //         .then((tag) => {
        //             let atag = JSON.parse(JSON.stringify(tag));
        //             console.log(chalk.magenta(atag) + "\n")

        //             db.User.findAll({
        //                 attributes: ['displayName']
        //             }).then((user) => {
        //                 let user1 = JSON.parse(JSON.stringify(user));
        //                 console.log(chalk.blue(user) + "\n")

        //                 const completeArray = { 
        //                     bookm, atag, user1
        //                 }

        //                 console.log(completeArray)

        //                 res.render('index', completeArray);
        //             })
        //         })
        // })