

// ############ ADD BOOKMARK - KR ###################


// $("input").on("keydown",function search(e) {
//     if(e.keyCode == 13) {
//         // console.log("add bookmark text sent");
//         alert($(this).val());
//     }
// });

// ############ end ADD BOOKMARK - KR ###################


$(document).ready(function() {

    $(".search").on("keydown", function (event) {

        event.preventDefault()

        let url = $(this).val().trim()

        console.log(url);
    }) 

})