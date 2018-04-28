var menu = document.querySelector(".header__navigation");
var menuItems = document.querySelectorAll(".navigation__item");
var burger = document.querySelector(".header__navigation-icon");
function changeMenuState(){
    menu.classList.toggle("header__navigation_visible");
}
burger.addEventListener("click", changeMenuState);
for(var i=0; i<menuItems.length; i++){
    menuItems[i].addEventListener("click", changeMenuState);
}