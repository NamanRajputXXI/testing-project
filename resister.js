const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword2");
const password = document.querySelector(".id_password");
const password2 = document.querySelector(".id_password2");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

togglePassword2.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
