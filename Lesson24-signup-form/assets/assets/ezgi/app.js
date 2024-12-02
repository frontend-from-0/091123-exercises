const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let isMailCorrect = true;

const emailInputError = document.getElementById('emailError');
const emailInput = document.getElementById('email');
const emailConfirm=document.getElementById("emailInput");
const initialPage=document.getElementById("container");
const confirmPage=document.getElementById("confirm");



// const placeHolder = emailInput.getAttribute("placeholder");
const st1 = document.styleSheets[0].cssRules[14]; 


	if (!emailRegex.test(emailInput.value)) {
		emailInputError.textContent = 'Valid email required';
        emailInput.style.backgroundColor="#d1abab";
        st1.style.color="#590808";
        // st1.style.borderColor="red"; why isn't working?

		isMailCorrect = false;

   // emailInput.placeholder.style.color="red"
   // placeHolder.value.style.backgroundColor="red";

	} else {
		emailInputError.textContent = '';
        emailConfirm.textContent= emailInput.value;
        confirmPage.classList.add("confirm-active");
        initialPage.style.display="none";
        confirmPage.style.display="block";
	}


    if (isMailCorrect) {
		console.table(emailInput.value);
        console.log(st1);
        console.log(initialPage);

	} else {
		console.error('Mail incorrect.');
	}

});