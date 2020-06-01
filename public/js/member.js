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


