function toggleTextbox(buttonNumber) {
  var textbox = document.getElementById("textbox" + buttonNumber);
  textbox.style.display = (textbox.style.display === "none" || textbox.style.display === "") ? "block" : "none";
}

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.querySelector('.hover-image').style.display = 'block';
  });

  button.addEventListener('mouseleave', () => {
    button.querySelector('.hover-image').style.display = 'none';
  });
});




let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


 // JavaScript to change the image source on hover 4 eye
 document.querySelector('.image-link').addEventListener('mouseover', function() {
  this.querySelector('img').src = 'frame2.png';
});

document.querySelector('.image-link').addEventListener('mouseout', function() {
  this.querySelector('img').src = 'frame1.png';
});
