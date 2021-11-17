const openNav = document.querySelector('.open-btn');
const closeNav = document.querySelector('.close-btn');
const menu = document.querySelector('.nav-list');


openNav.onclick = function () {
    menu.classList.add("show");
}

closeNav.onclick = function () {
    menu.classList.remove("show");
}