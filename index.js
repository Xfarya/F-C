function background() {
var innertext = document.getElementById("button");
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
  aboutme.classList.toggle('fade');
};


// function aboutmetoggle() {
//
//
//
// }

// aboutmebutton.addEventListener("click", function() {
//   if (aboutme.style.display === "none") {
//     aboutme.style.display = "block";
//   } else {
//     aboutme.style.display = "none";
//   }
//
// });
