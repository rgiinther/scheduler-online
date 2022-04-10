$(document).ready(function () {
    //display current day & time. (moment.js)
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 

    $(".btn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".info").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        //set items in local storage.
        localStorage.setItem(time, text);
    })
})
//load local storage for each timeblock.
$("#9 .info").val(localStorage.getItem("9"));
$("#10 .info").val(localStorage.getItem("10"));
$("#11 .info").val(localStorage.getItem("11"));
$("#12 .info").val(localStorage.getItem("12"));
$("#13 .info").val(localStorage.getItem("13"));
$("#14 .info").val(localStorage.getItem("14"));
$("#15 .info").val(localStorage.getItem("15"));
$("#16 .info").val(localStorage.getItem("16"));
$("#17 .info").val(localStorage.getItem("17"));

