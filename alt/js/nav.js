const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const box = document.querySelector('.box');

hamburger.addEventListener('click',() => {
    menu.classList.toggle('active');
})
hamburger.addEventListener('click',() => {
    box.classList.toggle('active');
})