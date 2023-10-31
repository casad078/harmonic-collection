function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "motherlylove") {
    window.location.href = "../entry-7";
    return false;
  } else {
    alert("Incorrect password. Please try again.");
    return false;
  }
}