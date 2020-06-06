const path = require("path")
const express = require("express");
const db = require("../models");
const chalk = require('chalk')
const fs = require('fs');

module.exports = function(app){
    //Login page
    // create home route
    app.get('/', function (req, res) {
        // if (req.user) {
        //     res.redirect("/members");
        // }
        //set to members while developing - remember to change this
        res.render('login');
    });

    // Members page (dashboard)
    app.get('/members', function (req, res) {
        fs.readFile('./public/details.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("Error reading file from disk:", err)
            return
            }
            try {
                const user = JSON.parse(jsonString)
                //console.log("User is:", user.id) 
                let query = user.id
                //console.log("fs userID" + query);
                db.user.findOne({
                    where: query,
                    include: [
                     {
                         model: db.bookmark,
                         include: [
                             {
                                 model: db.tag,
                             }
                         ],
                 }]
                }).then((user)=>{
                 const result = JSON.parse(JSON.stringify(user))
                    //res.json(user)
                    res.render('index', result)
                })
            } catch(err) {
                console.log('Error parsing JSON string:', err)
            }
        })

})
}