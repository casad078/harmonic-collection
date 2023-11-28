// JavaScript to handle the click event
document.getElementById('imageButton').addEventListener('click', function () {
    // Show the container and set the source of the clicked image
    document.getElementById('clickedImageContainer').style.display = 'block';
    document.getElementById('clickedImage').src = "text1-01.png";
});