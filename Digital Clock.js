
var timer;
function displayClock() {

timer=setInterval(updateClock, 1000);
  
}


function updateClock() {
var dateTime = new Date();
var ampm = "AM";
var hours = dateTime.getHours();
var minutes = dateTime.getMinutes();
var seconds = dateTime.getSeconds();
if (hours > 12) {
  hours -= 12;
  ampm = "PM";
}
document.getElementById("clock").innerHTML= hours + ":" + minutes + ":" + seconds + " " + ampm;

}


