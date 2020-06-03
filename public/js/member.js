// PREVENT DOUBLE/MULTIPLE UNINTENDED FORM SUBMISSIONS
// use debounce function to prevent double click / multiple submits
// &/OR disable button upon click/enter

// validate (<input type="url" -- line 70 index.handlebars)
// prepare for AJAX

$(document).ready(function () {

    $("#potrait").click(function (event) {
        event.preventDefault();
        $("#user-dropdown").toggleClass("hidden")
    })

    $(document).on('click', '.menuBtn', function (event){
      event.preventDefault();
      let btnValue = $(this).val()
      $("#" + btnValue + "dropDown").toggleClass("hidden")
    })

    $("#addbookmark").on('keypress', function(event) {
        if (event.which == '13'){
            console.log($(this).val().trim())
        
    }
});

});

console.log("test")

console.log($("#addBookmarkID"));

$("#addBookmarkID").on('submit', function(event){
    event.preventDefault();
    console.log("submit fired");
    let test = $(".addBookmark");
    console.log($(test).val().trim());
})


// ################### JOSH'S HAMBURGER APP ###########################
  
          const newBurger = $("#BurgerID");
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
              data: newBurger,
            }).then(function () {
              // Reload the page to get the updated list from server(true) or cache (false)
              location.reload(true);
            });
          }
          //console.log(newBurger)   
  
          if ($("#BurgerID").val() === "") {
            alert("YOUR NAME PLEASE \nPlease insert your BURGER NAME!!!");
          } else if ($("#inputSauce option:selected").val() === "0") {
            alert("GOT TO HAVE SAUCE!!! \nPlease choose some SAUCE!!");
          } else if ($("#inputPatty option:selected").val() === "0") {
            alert("BURGER WITH NO PATTY???? \nPlease choose a PATTY!!");
          } else {
            runAjax();
            alert("Burger Order Submitted");
          }

    // Purchase UPDATE
  
    $(".purchaseBtn").on("click", function (event) {
      event.preventDefault();
      //
      const burgerID = $(event.target).data("id");
  
      const sold = {
        id: burgerID,
      };
  
      //console.log(sold)
  
      // Send the PUT request.
      $.ajax("/burgers/" + burgerID, {
        type: "PUT",
        data: sold,
      }).then(function () {
        //console.log("Bye Bye burger", sold);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".delBtn").on("click", function (event) {
      const burgerID = $(event.target).data("id");
      event.preventDefault();
      // Send the DELETE request.
      $.ajax("/burgers/" + burgerID, {
        type: "DELETE",
      }).then(function () {
        //console.log("deleted burger", burgerID);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
// ################### end JOSH'S HAMBURGER APP ###########################