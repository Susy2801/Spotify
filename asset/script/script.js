function pageLoading() {
  setTimeout(function animation() {
    var form = document.getElementById("form");
    var logo = document.getElementById("logo");
    var img = document.getElementById("logo-img");
    form.style.height = "100vh";
    logo.style.height = "80px";
    img.style.width = "133px";
  }, 3000);
}

function togglePassword() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.querySelector(".fa-eye");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

pageLoading();
