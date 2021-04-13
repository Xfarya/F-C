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
     innertext.style.color = "pink"
   }
 }

var aboutme = document.getElementById("aboutme");
document.getElementById("aboutmebutton").onclick = function() {
  aboutme.classList.toggle('show');
};


var person = prompt("Please enter your name");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hi " + person + " :)";
}
