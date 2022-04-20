/*$(document).ready(function () {
    //display current day & time. (moment.js)
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 

    $(".btn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".info").val(); //html attribute
        var time = $(this).parent().attr("id");  //html id attribute

        //set items in local storage.
        localStorage.setItem(time, text);
    })
})*/

//load data from local storage for each timeblock.
/*$("#9 .info").val(localStorage.getItem("9"));
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

scheduleTrack(); 
}*/


//timer 
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do YYYY, h:mm:ss a"));

var currentHour = Number(currentDay.format('H'));

setInterval(function() {
    currentDay = moment();
    $("#currentDay").text(currentDay.format("MMMM Do YYYY h:mm:ss a"));
}, 1000)

//local storage lines 69 to 
//9am
$("#btn0").click(function(){
    var input9am = document.getElementById("0").value
    localStorage.setItem("9am", JSON.stringify(input9am))
})
var output9am = JSON.parse(localStorage.getItem("9am"))
document.getElementById("0").value = output9am;

//10am
$("#btn1").click(function(){
    var input10am = document.getElementById("1").value
    localStorage.setItem("10am", JSON.stringify(input10am))
})
var output10am = JSON.parse(localStorage.getItem("10am"))
document.getElementById("1").value = output10am;

//11am
$("btn2").click(function(){
    var input11am = document.getElementById("2").value
    localStorage.setItem("11am", JSON.stringify(input11am))
})
var output11am = JSON.parse(localStorage.getItem("11am"))
document.getElementById("2").value = output11am;

//12pm
$("#btn3").click(function(){
    var input12pm = document.getElementById("3").value
    localStorage.setItem("3", JSON.stringify(input12pm))
})
var output12pm = JSON.parse(localStorage.getItem("12pm"))
document.getElementById("3").value = output12pm;

//1pm
$("#btn4").click(function(){
    var input1pm = document.getElementById("4").value
    localStorage.setItem("4", JSON.stringify(input12pm))
})
var output1pm = JSON.parse(localStorage.getItem("1pm"))
document.getElementById("4").value = output1pm;

//2pm
$("#btn5").click(function(){
    var input2pm = document.getElementById("5").value
    localStorage.setItem("5", JSON.stringify(input12pm))
})
var output2pm = JSON.parse(localStorage.getItem("2pm"))
document.getElementById("5").value = output2pm;

//3pm
$("#btn6").click(function(){
    var input3pm = document.getElementById("6").value
    localStorage.setItem("6", JSON.stringify(input3pm))
})
var output3pm = JSON.parse(localStorage.getItem("3pm"))
document.getElementById("6").value = output3pm;

//4pm
$("#btn7").click(function(){
    var input4pm = document.getElementById("7").value
    localStorage.setItem("7", JSON.stringify(input4pm))
})
var output4pm = JSON.parse(localStorage.getItem("4pm"))
document.getElementById("7").value = output4pm;

//5pm
$("#btn8").click(function(){
    var input5pm = document.getElementById("8").value
    localStorage.setItem("8", JSON.stringify(input12pm))
})
var output5pm = JSON.parse(localStorage.getItem("5pm"))
document.getElementById("8").value = output5pm;



//schedule tracking lines 96 to 
//9am
if (currentHour === 9) {
    $("#0").addClass("present");
}
else if (currentHour > 9) {
    $("#0").addClass("past");
}
else {
    $("#0").addClass("future");
}

//10





