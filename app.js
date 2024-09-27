const form = document.getElementById("form");
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateDefault();
});


function SetError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerHTML = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function SetSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerHTML = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}


function ValidEmail(element) {
  const lower = element.toLowerCase();
  const istrue = lower.search("@gmail.com");
  console.log(istrue);
  return istrue;
}


function validateDefault() {
  const usernameValue = username.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    SetError(username, "Username is required");
  } else {
    SetSuccess(username);
  }

  if (lastnameValue === "") {
    SetError(lastname, "Lastname is required.");
  } else {
    SetSuccess(lastname);
  }

  if (emailValue === "") {
    SetError(email, "Email is required.");
  } else if (ValidEmail(emailValue) === -1) {
    SetError(email, "Provide a valid email address.");
  } else {
    SetSuccess(email);
  }

  if (passwordValue === "") {
    SetError(password, "Password is required.");
  } else if (passwordValue.length < 8) {
    SetError(password, "Password must be at least 8 character.");
  } else {
    SetSuccess(password);
  }

  if (password2Value === "") {
    SetError(password2, "Please confirm your password.");
  } else if (password2Value !== passwordValue) {
    SetError(password2, "Passwords doesn't match.");
  } else {
    SetSuccess(password2);
  }
}


