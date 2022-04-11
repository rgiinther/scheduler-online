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
//load data from local storage for each timeblock.
$("#9 .info").val(localStorage.getItem("9"));
$("#10 .info").val(localStorage.getItem("10"));
$("#11 .info").val(localStorage.getItem("11"));
$("#12 .info").val(localStorage.getItem("12"));
$("#13 .info").val(localStorage.getItem("13"));
$("#14 .info").val(localStorage.getItem("14"));
$("#15 .info").val(localStorage.getItem("15"));
$("#16 .info").val(localStorage.getItem("16"));
$("#17 .info").val(localStorage.getItem("17"));

function scheduleTrack() {
     //current number of hours/ use moment.js
     var currentTime = moment().time(); 

     // loop over time blocks
     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("time")[1]);
        console.log( blockTime, currentTime)
        //check if we've moved past this time, click into css/html given classes of past, present, or future
        if (blockTime < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
scheduleTrack(); //re-run function
