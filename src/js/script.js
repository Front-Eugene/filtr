const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', function() {
    header.classList.toggle('show')
    menuBtn.classList.toggle('change')
})