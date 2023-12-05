

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

/*pass*/
function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "RESURRECTION") {
    window.location.href = "https://casad078.github.io/harmonic-collection/entry-9/";
    return false;
  } else {
    alert("Incorrect password. Please try again.");
    return false;
  }
}

/*hearts*/

const imageSources = [
  'letter1.png',
  'letter2.png',
  'letter3.png',
  'letter4.png'
];

let currentIndex = 0;

function scaleImage(buttonNumber) {
  const button = document.getElementById(`button${buttonNumber}`);
  button.getElementsByTagName('img')[0].style.transform = 'scale(1.1)';
}

function resetImage(buttonNumber) {
  const button = document.getElementById(`button${buttonNumber}`);
  button.getElementsByTagName('img')[0].style.transform = 'scale(1)';
}

function changeImage(imageNumber) {
  const imageDisplay = document.getElementById('image-display');
  const newImage = document.createElement('img');

  // Use the current index and update it for the next click
  newImage.src = imageSources[currentIndex];
  newImage.alt = `New Image ${currentIndex + 1}`;

  // Increment the index and wrap around if it exceeds the array length
  currentIndex = (currentIndex + 1) % imageSources.length;

  // Clear previous image
  imageDisplay.innerHTML = '';

  // Append the new image
  imageDisplay.appendChild(newImage);
}