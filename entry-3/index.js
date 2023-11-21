
//back to top button
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


/*form*/
function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "74386") {
    window.location.href = "https://casad078.github.io/harmonic-collection/entry-5/";
    return false;
  } else {
    alert("Incorrect password. Please try again.");
    return false;
  }
}