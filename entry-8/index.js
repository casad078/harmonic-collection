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





document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".dropdown-trigger");

    triggers.forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Toggle the visibility of the dropdown content
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    });
});





const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const expandedImage = document.getElementById('expanded-image');
const closeModal = document.querySelector('.close');

let currentImage = null;

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modal.style.display = 'block';
        modalContent.style.width = 'auto';
        expandedImage.src = e.target.src;
        currentImage = e.target;
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

function showPreviousImage() {
    if (currentImage && currentImage.parentElement.previousElementSibling) {
        currentImage = currentImage.parentElement.previousElementSibling.querySelector('img');
        expandedImage.src = currentImage.src;
    }
}

function showNextImage() {
    if (currentImage && currentImage.parentElement.nextElementSibling) {
        currentImage = currentImage.parentElement.nextElementSibling.querySelector('img');
        expandedImage.src = currentImage.src;
    }
}




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