const menuBtn = document.querySelector('.menu_button');
const menu = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})