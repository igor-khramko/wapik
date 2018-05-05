var screenItems = document.querySelectorAll(".phone__screen");
var screen = document.querySelector(".phone");
screen.addEventListener("click", changePhoneScreen);
screen.addEventListener("mouseover", altText);

function changePhoneScreen(){
    for(let i = 0; i < screenItems.length; i++){
        if(!screenItems[i].classList.contains("hide-screen")){ 
            screenItems[i].classList.add("hide-screen"); 
            if(screenItems[i + 1]){
                screenItems[i + 1].classList.remove("hide-screen"); 
            } else{
                screenItems[0].classList.remove("hide-screen");
            }
        return; 
        } 
    }
}

function altText(){
    for(let i = 0; i < screenItems.length; i++){
        screenItems[i].setAttribute("title", "Pls, click to change screen");
    }
}



