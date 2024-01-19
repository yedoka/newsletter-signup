function subscribe() {
  var emailInput = document.getElementById("email");
  var successMessage = document.getElementById("success");
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  var container = document.getElementsByClassName("container")[0];
  var successEmail = document.getElementById("successEmail");
  var error = document.getElementById("error");

  if (emailInput.checkValidity()) {
    var userEmail = emailInput.value;
    successEmail.textContent = userEmail;
    left.style.display = "none";
    right.style.display = "none";
    successMessage.style.display = "block";
    if (window.innerWidth < 375) {
      container.style.width = "100%";
      container.style.height = "100%";
      container.style.justifyContent = "center";
    } else {
      container.style.width = "100%";
    }
  } else {
    error.classList.remove("hidden");
    emailInput.style.border = "1px solid red";
    emailInput.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    emailInput.style.color = "red";
  }
}
