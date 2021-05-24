var person = prompt("Please enter your name");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hi " + person + " :)";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


function background() {
var innertext = document.getElementById("buttontoggle");
  var videotoggle = document.getElementById("video");
  if (videotoggle.style.display === "block") {
    videotoggle.style.display = "none";
  } else {
    videotoggle.style.display = "block";
  }
  if (innertext.innerHTML === "stop it") {
     innertext.innerHTML = "go on";
     innertext.style.color = "white"
   } else {
     innertext.innerHTML = "stop it";
     innertext.style.color = "#fadbde"
   }
 }

 document.getElementById("hideAll").style.display = "block";
 window.onload = function()
  { document.getElementById("hideAll").style.display = "none"; }
