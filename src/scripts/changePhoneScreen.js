var screen = document.querySelectorAll(".phone__screen");
for(let i = 0; i < screen.length; i++){
    screen[i].addEventListener("click", changePhoneScreen);
}
function changePhoneScreen(){
    for(let i = 0; i < screen.length - 1; i++){
        screen[i].classList.add("hide-screen");
        screen[i+1].classList.remove("hide-screen");
    }  
}
