// ############ ADD BOOKMARK - KR ###################

// $("input").on("keydown",function search(e) {
//     if(e.keyCode == 13) {
//         // console.log("add bookmark text sent");
//         alert($(this).val());
//     }
// });

// ############ end ADD BOOKMARK - KR ###################

// $(document).ready(function() {

//     $(".addBookmark").on("keypress", function (event) {

//         event.preventDefault()

//         let url = $(this).val().trim()

//         console.log(url);
//     })

// })

// $("#addbookmark").on('keypress', function(event) {
//     if (event.which == '13'){
//         console.log($(this).val().trim())
//
console.log("test")

console.log($("#addBookmarkID"));

$("#addBookmarkID").on('submit', function(event){
    event.preventDefault();
    console.log("submit fired");
    let test = $(".addBookmark");
    console.log($(test).val().trim());
})

// PREVENT DOUBLE/MULTIPLE UNINTENDED FORM SUBMISSIONS
// use debounce function to prevent double click / multiple submits
// &/OR disable button upon click/enter

// validate (<input type="url" -- line 70 index.handlebars)
// prepare for AJAX