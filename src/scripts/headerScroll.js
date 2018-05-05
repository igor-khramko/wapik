window.addEventListener("scroll", headerScrolledStyles); 

function headerScrolledStyles(){ 
    const header = document.querySelector(".header_dark-bg") 
    || document.querySelector(".header_lightsmoke-bg") 
    || document.querySelector(".header_light-bg"); 

    const scrollCondition = pageYOffset > header.offsetHeight && header.classList.contains("header_dark-scrolled") 
    || pageYOffset < header.offsetHeight && !header.classList.contains("header_dark-scrolled"); 

    if (header.classList.contains("header_dark-bg")) { 
        if(!scrollCondition){ 
            header.classList.toggle("header_dark-scrolled"); 
        } 
    } else if (header.classList.contains("header_lightsmoke-bg") || header.classList.contains("header_light-bg")) { 

        const companyName = document.querySelector(".header__company-name"); 
        const phoneIcon = document.querySelector(".header__phone-icon"); 
        const phoneNumber = document.querySelector(".header__phone-number"); 
        const navigation = document.querySelector(".navigation") 

        if(!scrollCondition){ 
            header.classList.toggle("header_dark-scrolled"); 
            companyName.classList.toggle("header__company-name_dark"); 
            phoneIcon.classList.toggle("header__phone-icon_dark"); 
            phoneNumber.classList.toggle("header__phone-number_dark"); 
            navigation.classList.toggle("navigation_dark"); 
        } 
    } 
}
