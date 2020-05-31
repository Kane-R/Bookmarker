// TOP BURGER Script.JS

// //changes images after clicking on the checkboxes
// function check_value(val, mycheckbox) {
//     const imgEL = document.getElementById("img" + val);
//     if (mycheckbox.checked === true) {
//       imgEL.classList.remove("imgClear");
//     } else {
//       imgEL.classList.add("imgClear");
//     }
//   }
  
//   $(document).ready(function () {
  
//     //update burgerbuilder when you click burger dropdown
  
//     $("#inputPatty").click(function () {
//       let burgerID = $(this).val();
//       $("#img" + burgerID).addClass("imgClear")
//     });
  
//     $("#inputPatty").change(function () {
//       let burgerID = $(this).val();
//       if ($("#img" + burgerID).attr("class") === "imgClear") {
//         $("#img" + burgerID).removeClass("imgClear")
//       } else {
//         $("#img" + burgerID).addClass("imgClear")
//       }
//     });
  
//     //update burgerbuilder when you click sauce dropdown
  
//     $("#inputSauce").click(function () {
//       let sauceID = $(this).val();
//       $("#img" + sauceID).addClass("imgClear")
//     });
  
//     $("#inputSauce").change(function () {
//       let sauceID = $(this).val();
//       if ($("#img" + sauceID).attr("class") === "imgClear") {
//         $("#img" + sauceID).removeClass("imgClear")
//       } else {
//         $("#img" + sauceID).addClass("imgClear")
//       }
  
//     });



// ############ var bodyParser = require('body-parser')
// https://www.npmjs.com/package/body-parser


// ##################  Express route-specific
// This example demonstrates adding body parsers specifically to the routes that need them. In general, this is the most recommended way to use body-parser with Express.

// var express = require('express')
// var bodyParser = require('body-parser')
 
// var app = express()
 
// ### create application/json parser
// var jsonParser = bodyParser.json()
 
// ### create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// ### POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   res.send('welcome, ' + req.body.username)
// })
 
// #### POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
  // ### create user in req.body
// })

// ###############################################




//POST URL



$(".newBurger").on("submit", function (event) {
  
    event.preventDefault(); 
    event.stopPropagation(); 
    event.stopImmediatePropagation();
   
    if ($(".topping:checked").length == 0) {
      alert("NO TOPPINGS!!! \nPlease select at least one TOPPING")
    } else {
      const toppings = [];
      $.each($("input[name='topping']:checked"), function () {
        
        toppings.push($(this).val());

        //console.log("My toppings are: " + toppings.join(", "));
// ########## IMPORTANT ###############


const newBookmark = $("#BurgerID")
        const newBurger = {
          title: $("#BurgerID").val().trim(),
          // Sauce: $('#inputSauce option:selected').val(),
          // Patty: $('#inputPatty option:selected').val(),
          // Topping: toppings
        };

        function runAjax() {
          // Send the POST request.
          $.ajax("/newburger", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              // Reload the page to get the updated list from server(true) or cache (false)
              location.reload(true);
            })

        }
        //console.log(newBurger)







// ########## IMPORTANT ###############


const newBookmark = $("#BurgerID")
        const newBurger = {
          title: $("#BurgerID").val().trim(),
          // Sauce: $('#inputSauce option:selected').val(),
          // Patty: $('#inputPatty option:selected').val(),
          // Topping: toppings
        };

        function runAjax() {
          // Send the POST request.
          $.ajax("/newburger", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              // Reload the page to get the updated list from server(true) or cache (false)
              location.reload(true);
            })

        }
//console.log(newBurger)



if ($("#BurgerID").val() === "") {
    alert("YOUR NAME PLEASE \nPlease insert your BURGER NAME!!!")
  } else if ($('#inputSauce option:selected').val() === "0") {
    alert("GOT TO HAVE SAUCE!!! \nPlease choose some SAUCE!!")
  } else if ($('#inputPatty option:selected').val() === "0") {
    alert("BURGER WITH NO PATTY???? \nPlease choose a PATTY!!")
  } else {
    runAjax()
    alert("Burger Order Submitted")
  }
});
}
});


// Purchase UPDATE

$(".purchaseBtn").on("click", function (event) {
event.preventDefault();
//
const burgerID = $(event.target).data("id")

const sold = {
id: burgerID,
};

//console.log(sold)