const phoneRegex = /^\+?9?0?\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let isFormCorrect = true;

	const nameInput = document.getElementById('name');
	const nameInputError = document.getElementById('nameError');
	if (nameInput.value.length < 3) {
		nameInputError.textContent = 'Name should be at least 3 characters long.';
		isFormCorrect = false;
	} else {
		nameInputError.textContent = '';
	}


	const surnameInput = document.getElementById("surname");
	const surnameInputError = document.getElementById("surnameError");
	if(surnameInput.value.length <3 && surnameInput !== "string"){
		surnameInputError.textContent ='Surname should be at least 3 characters long and contain only letter.';
		isFormCorrect = false;
	} else {
		surnameInputError.textContent ='';
	}


    const emailInput = document.getElementById('email');
	const emailInputError = document.getElementById('emailError');
	if (!emailRegex.test(emailInput.value)) {
		emailInputError.textContent = 'Please enter correct email address.';
		isFormCorrect = false;
	} else {
		emailInputError.textContent = '';
	}

	const ageInput = document.getElementById("age");
	const ageInputError = document.getElementById("ageError");
	if(ageInput.value <= 0 || ageInput.value > 120){
		ageInputError.textContent ="Please enter your age between 0-120.";
		isFormCorrect = false;
	} else {
		ageInputError.textContent = '';
	}

	const phoneInput = document.getElementById("phone");
	const phoneInputError = document.getElementById("phoneError");
	if(!phoneRegex.test(phoneInput.value)){
		phoneInputError.textContent ="Please enter your phone number in true format";
		isFormCorrect = false;
	} else {
		phoneInputError = '';
	}

	const formData = {
		name: nameInput.value,
		email: emailInput.value,
		surname : surnameInput.value,
		age : ageInput.value
	};

	if (isFormCorrect) {
		console.table(formData);
	} else {
		console.error('Form incorrect.');
	}
});
