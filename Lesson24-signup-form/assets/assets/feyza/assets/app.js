const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmailCorrect = true;
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const formContainer = document.querySelector("box");
  const hidenBox = document.querySelector(".hide-box");
  const emailDisplay = document.getElementById("emailDisplay");

  emailError.textContent = "";
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Valid email required.";
    isEmailCorrect = false;
  }

  if (isEmailCorrect) {
    formContainer.classList.add("hide-box");
    hidenBox.classList.remove("hide-box");
    emailDisplay.textContent = emailInput.value;
  }
});

// document
//   .getElementsByClassName("submit-btn")
//   .addEventListener("click", function () {
//     const formContainer = document.querySelector("box");
//     const hidenBox = document.getElementsByClassId("#hide-box");
//     hidenBox.classList.add("hide-box");
//     formContainer.classList.remove("hide-box");
//   });
