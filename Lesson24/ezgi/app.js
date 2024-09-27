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

	if (surnameInput.value.length < 3) {
		surnameInputError.textContent = 'Surname should be at least 3 characters long.';
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


	const age = document.getElementById('age');
	const ageInputError = document.getElementById('ageError');

	if (age.value<18) {
		ageInputError.textContent = 'You should be at least 18 .';
		isFormCorrect = false;
	} else {
		ageInputError.textContent = '';
	}


	const phoneInputError = document.getElementById('phoneError');
	const phonelInput = document.getElementById('phone');
  
	if (!phoneRegex.test(phonelInput.value)) {
		phoneInputError.textContent = 'Please enter correct phone number.';
		isFormCorrect = false;
	} else {
		phoneInputError.textContent = '';
	}



	const formData = {
		name: nameInput.value,
		surname: surnameInput.value,
		email: emailInput.value,
		age: age.value,
		phone: phonelInput.value,
	};

	if (isFormCorrect) {
		console.table(formData);
	} else {
		console.error('Form incorrect.');
	}
});
