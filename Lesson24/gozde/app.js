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
	const ageNumber = Number(ageInput.value);

	if (isNaN(ageNumber) || ageNumber < 0 || ageNumber > 100) {
		ageInputError.textContent = 'Please enter a valid number';
		isFormCorrect = false;
	} else {
		ageInputError.textContent = '';
	}

	
	const phoneInput = document.getElementById('phone');
	const phoneInputError = document.getElementById('phoneError');

	if (!phoneRegex.test(phoneInput.value)) {
		phoneInputError.textContent = 'Please enter a correct phone number.';
		isFormCorrect = false;
	} else {
		phoneInputError.textContent = '';
	}
	

	const formData = {
		name: nameInput.value,
		email: emailInput.value,
	};

	if (isFormCorrect) {
		console.table(formData);
	} else {
		console.error('Form incorrect.');
	}
});
