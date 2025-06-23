const navicon = document.getElementById('nav-icon');
const ulnavbar = document.getElementById('ul-navbar');

navicon.addEventListener('click', () => {
    ulnavbar.classList.toggle('ul-navbar');
});