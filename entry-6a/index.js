function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "motherlylove") {
    window.location.href = "../";
    return false;
  } else {
    alert("Incorrect password. Please try again.");
    return false;
  }
}