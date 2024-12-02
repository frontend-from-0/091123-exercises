const form = document.querySelector('form');
const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card-2');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailValue)) {
        card_1.classList.add('hide');
        card_2.classList.remove('hide');
    } else {
        alert('Please enter a valid email address.');
    }


});
