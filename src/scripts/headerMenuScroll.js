window.addEventListener("scroll", headerMenuScrolledStyles); 

function headerMenuScrolledStyles(){ 
    var menu = document.querySelector(".navigation");
    var header = document.querySelector(".header");
    var burger = document.querySelector(".header__navigation-icon_dark")
    var masthead = document.querySelector(".masthead");
    
    if(!header.classList.contains("header__navigation-icon_dark") && menu.classList.contains("navigation_adaptive")){ 
        if(pageYOffset > (masthead.offsetHeight - 2*menu.offsetHeight)){ 
            menu.classList.add("navigation_adaptive-dark");
            menu.classList.remove("nanavigation_adaptive");
        } else{
            menu.classList.add("navigation_adaptive");
            menu.classList.remove("navigation_adaptive-dark");
        }   
    }
}
