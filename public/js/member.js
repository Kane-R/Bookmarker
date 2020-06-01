//import { cloneDeep } from "sequelize/types/lib/utils";

$(document).ready(function () {

    $("#potrait").click(function (event) {
        event.preventDefault();
        $("#user-dropdown").toggleClass("hidden")
    })

    $(document).on('click', '.menuBtn', function (event){
      event.preventDefault();
      const { open } = $(this).data();
      console.log(open);
      $("#" + open).toggleClass("hidden")
    })

    $(document).on('click', '.binBtn', function (event){
        event.preventDefault();
        const { open } = $(this).data();
        console.log(open);
        $("#" + open).toggleClass("hidden")
      })



    $("#addBookmark").on('submit', function(event) {
        event.preventDefault();
        regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        let tagInput = $("#bookmarkInput").val().trim();
        let tagVal = tagInput.toLowerCase()
        if (regexp.test(tagVal))
        {
          console.log("true");
        }
        else
        {
          console.log("false");
        }
    });


});


