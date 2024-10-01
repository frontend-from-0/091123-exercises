const accordions = document.querySelectorAll('.accordion');

accordions.forEach(function (accordion) {
    accordion.addEventListener('click', function (e) {
        let accordionBtn = this.querySelector('button');
        this.classList.toggle('active');
        if (accordionBtn.textContent === '+') {
            accordionBtn.textContent = '-';
        } else {
            accordionBtn.textContent = '+';

        }
    });
});
