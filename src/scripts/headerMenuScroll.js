window.addEventListener("scroll", headerMenuScrolledStyles); 

function headerMenuScrolledStyles(){ 
    const menu = document.querySelector(".header__navigation_scrolled");
    const header = document.querySelector(".header_dark-bg");
    // || document.querySelector(".header_lightsmoke-bg") 
    // || document.querySelector(".header_light-bg"); 
    const masthead = document.querySelector(".masthead");
    
    const scrollCondition = pageYOffset > masthead.offsetHeight && menu.classList.contains("header__navigation_scrolled")
    ||  pageYOffset < masthead.offsetHeight;
    
    if (menu.classList.contains("header__navigation_scrolled")) { 
        if(scrollCondition){ 
            menu.classList.toggle("header__navigation_scrolled-dark");
        } 
    } // else if (menu.classList.contains("header_lightsmoke-bg") || header.classList.contains("header_light-bg")) { 

        
    //     const menuItems = document.querySelectorAll(".navigation__item");
    //     const masthead = document.querySelector(".masthead");

    //     if(!scrollCondition){ 
    //         menu.classList.toggle("header__navigation_visible-scrolled");
    //     } 
    // } 
}
