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


// const form = document.querySelector("#email")
// eInput = form.querySelector(".email-input")
// text = form.querySelector(".etext")

// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   form.classList.add("error");
//   form.classList.remove("valid");
//   if(eInput.value == ""){
//     text.innerText = "Email can't be blank";
//   }else if (!eInput.value.match(pattern) ) { //if patter is not matched with user's enter value
//     text.innerText = "Please enter a valid email";
//   }else{
//     form.classList.replace("error" , "valid"); //replacing error class with valid class
//     text.innerText = "This is a valid email";
//   }
// })