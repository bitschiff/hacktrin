var endDate = new Date("Feb 12, 2018 15:37:25").getTime();

var x = setInterval(function() {
  document.getElementById("header").innerHTML = "HackTrin Begins In:";

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = endDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
 // document.getElementById("counter").innerHTML = numToBinary(days) + ":" + numToBinary(hours) + ":" + numToBinary(minutes) + ":" + numToBinary(seconds);
 document.getElementById("days").innerHTML = numToBinary(days,7) + "D";
 document.getElementById("hours").innerHTML = numToBinary(hours,5)+ "H";
 document.getElementById("mins").innerHTML = numToBinary(minutes,6)+  "M";
 document.getElementById("secs").innerHTML = numToBinary(seconds,6)+ "S";

 var splitters = document.getElementsByClassName("splitter");
 for(i=0;i<splitters.length;i++){
  splitters[i].innerHTML = ":";
 }
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);




//document.getElementById("counter").innerHTML = numToBinary(165);

function numToBinary(theNum,length) {
  return ("0000000000000000" + theNum.toString(2)).slice(-1*length);
}