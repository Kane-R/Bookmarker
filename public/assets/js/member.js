$(document).ready(function () {

  //Log Out button pop up window
  $("#potrait").click(function (event) {
    event.preventDefault();
    $("#user-dropdown").toggleClass("hidden")
  })

  //Cards pop up window
  $(document).on('click', '.menuBtn', function (event) {
    event.preventDefault();
    const {
      open
    } = $(this).data();
    console.log(open);
    $("#" + open).toggleClass("hidden")
  })

  //bin button pop up window
  $(document).on('click', '.binBtn', function (event) {
    event.preventDefault();
    const {
      open
    } = $(this).data();
    console.log(open);
    $("#" + open).toggleClass("hidden")
  })

  //Generated Tag Delete 'No'
  $(".delNoBtn").on('click', function (event) {
    event.preventDefault();
    const {
      close
    } = $(this).data();
    console.log(close);
    $("#" + close).toggleClass("hidden")
  })

  // POST REQUESTS

  //Add BookMark bar - WORKING
  $("#addBookmark").on('submit', function (event) {
    event.preventDefault();
    regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    let tagInput = $("#bookmarkInput").val().trim();
    let tagVal = tagInput.toLowerCase()
    $.getJSON("details.json", function (json) {

      console.log("This is the YOUR USER ID: " + json.id)

      const bookmark = {
        userID: json.id,
        url: tagVal,
      }

      if (regexp.test(tagVal)) {
        console.log("true");
        // Do Ajax call here

        $.ajax("/bookmarks", {
          type: 'POST',
          data: bookmark
        }).then(
          function () {
            location.reload(true);
          }
        )

      } else {
        console.log("false");
        //Do an alert here
      }
    });
  })

  //Create Tag in DropDown box 
  $(document).on('submit', '.createTagForm', function (event) {
    event.preventDefault();
    regexp = /^[a-z ,.'-]+$/i
    let { number } = $(this).data();
    let {  }

    console.log(number);
    console.log($("#" + number).val().trim());
    let tagName = $("#" + number).val().trim()

    let tag = {
      name: tagName,
    }
    if (regexp.test(tagName)) {
      console.log("Added Tag");

      $.ajax("/tags", {
        type: 'POST',
        data: tag,
      }).then(
        function (response) {
       
          let bookTags = {
            bookID: number,
            tagID: response.id
          }

          console.log("-----")
          console.log(bookTags)
          console.log("------")

          $.ajax("/tags", {
            type: 'POST',
            data: bookTags,
          }).then( 
            function (){
            console.log("posted!!!")
            location.reload(true);
          })
        }
      )

    } else {
      console.log("Tag Input Error");
      //Do an alert here
    }
  })


  // PUT REQUESTS

  //Remove tag in DropDown box for Bookmar - WORKING
  $(".removeBtn").on('click', function (event) {
    event.preventDefault();
    console.log("remove btn clicked")
    //Do something
    
    let tagNo = $(this).data("id") 
    let bookNo = $(this).data("bookmark")
    console.log(tagNo)
    console.log(bookNo);

    let tagRemove = {
      tagID: tagNo,
      bookmarkID: bookNo
    }
    
    
    $.ajax("/bookmark_tags", {
      type: 'DELETE',
      data: tagRemove
    }).then(
      function(){
        console.log("deleted tag id: " + tagNo);
        location.reload(true);
      }
    )
  })


  //DELETE REQUESTS

  //Generated Tag Delete 'Yes'
  $(".delYesBtn").on('click', function (event) {
    event.preventDefault();
    console.log("Delete btn clicked")

    ////ID still needs to be inserted into HTML
    //const tagID = $(event.target).data("id") 
    //console.log(tagID)
    // const deleteTag = {
    //   id: tagID,
    // }
    // $.ajax("/tags/ + tagID", {
    //   type: 'DELETE',
    //   data: deleteTag,
    // }).then(
    //   function(){
    //     location.reload(true);
    //   }
    // )

  })


  // GET REQUESTS ???

  //No Bookmark Tag
  $("#noTagBtn").on("click", function (event) {
    event.preventDefault();
    console.log("You have click tag: No Tag Btn")
    //Do something

    // const noTags = select all where no tag?
    // const noTag = {
    //   where: *?,
    // }
    // $.ajax("/tags", {
    //   type: 'GET',
    //   data: noTag,
    // }).then(
    //   function(){
    //     location.reload(true);
    //   }
    // )
  })

  //All Bookmark Tag
  $("#allBookmarks").on("click", function (event) {
    event.preventDefault();
    console.log("You have click tag: all bookmarks Btn")
    //Do something

    // // const allBM = select all URLS
    // const allBooks = {
    //   where: "*?",
    // }
    // $.ajax("/tags", {
    //   type: 'GET',
    //   data: allBooks,
    // }).then(
    //   function(){
    //     location.reload(true);
    //   }
    // )
  })

  //Generated Tag Btn
  $(".generatedTag").on('click', function (event) {
    event.preventDefault();
    const btnValue = $(this).val()
    console.log("You have click tag: " + btnValue)
    //Do Something

    // const tagSelection = {
    //   where: btnValue 
    // }
    // $.ajax("/tags", {
    //   type: 'GET',
    //   data: tagSelection,
    // }).then(
    //   function(){
    //     location.reload(true);
    //   }
    // )
  })

  //Log Out Button
  $("#logOut").on("click", function (event) {
    event.preventDefault();
    console.log("Log Out Button Pushed");
    // Do something

    // $.ajax({
    //   type: 'GET',
    //   data: {action:'logout'},
    //   success: function(data){
    //   alert(data);
    //location.reload();
    //window.location.href = data;
    //     }
    // });
  })



});
