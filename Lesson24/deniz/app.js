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

	const surnameInput = document.getElementById('surname');
	const surnameInputError = document.getElementById('surnameError');

	if (surnameInput.value.length < 2) {
		surnameInputError.textContent = 'Surname should be at least 2 characters long.';
		isFormCorrect = false;
	} else {
		surnameInputError.textContent = '';
	}


	const emailInputError = document.getElementById('emailError');
	const emailInput = document.getElementById('email');
  
	if (!emailRegex.test(emailInput.value)) {
		emailInputError.textContent = 'Please enter correct email address.';
		isFormCorrect = false;
	} else {
		emailInputError.textContent = '';
	}

	const ageInput = document.getElementById('age');
	const ageInputError = document.getElementById('ageError');

	if (ageInput.value > 120 || ageInput.value <= 0 ) {
		ageInputError.textContent = 'Please enter a number between 1-120:)';
		isFormCorrect = false;
	} else {
		ageInputErron.textContent = '';
	}


	const phoneInput = document.getElementById('phone');
	const phoneInputError = document.getElementById('phoneError');

	if (!phoneRegex.test(phoneInput.value)) {
		phoneInputError.textContent = 'Please enter a valid phone number.';
		isFormCorrect = false
	} else {
		phoneInputError.textContent = '';
	}


	const formData = {
		name: nameInput.value,
		email: emailInput.value,
		surname: surnameInput.value,
		ageInput: ageInput.value,
	};

	if (isFormCorrect) {
		console.table(formData);
	} else {
		console.error('Form incorrect.');
	}
});
