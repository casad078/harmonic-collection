    // JavaScript to handle the click event for Button 1
    document.getElementById('imageButton1').addEventListener('click', function () {
        document.getElementById('clickedImageContainer1').style.display = 'block';
        document.getElementById('clickedImage1').src = "text1-01.png";
      });
  
      // JavaScript to handle the click event for Button 2
      document.getElementById('imageButton2').addEventListener('click', function () {
        document.getElementById('clickedImageContainer2').style.display = 'block';
        document.getElementById('clickedImage2').src = "text2-01.png";
      });
  
      // JavaScript to handle the click event for Button 3
      document.getElementById('imageButton3').addEventListener('click', function () {
        document.getElementById('clickedImageContainer3').style.display = 'block';
        document.getElementById('clickedImage3').src = "text3-01.png";
      });
  

      
      /*mobile nav*/
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}