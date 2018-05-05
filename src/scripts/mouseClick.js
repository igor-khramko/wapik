let button = document.querySelectorAll(".button_hover-transparent");
for(let i=0; i<button.length; i++){
    button[i].addEventListener("mousedown", buttonDown);
    button[i].addEventListener("mouseup", buttonUp);
}
function buttonDown(){
    button[i].classList.add("button_clicked");
}
function buttonUp(){
    button[i].classList.remove("button_clicked");
}


