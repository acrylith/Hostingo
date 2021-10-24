let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.burger__menu');
let head = document.querySelector('.header')

toggle.addEventListener('click', function(e) {
    toggle.classList.toggle('active');
    menu.classList.toggle('opened');
    head.classList.toggle('fixed');
})