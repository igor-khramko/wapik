var button = document.querySelectorAll(".button");
function buttonClick(){
    for(i=0; i<button.length; i++){
        button[i].classList.toggle("button_clicked");
    }
}
button.addEventListener("click", buttonClick);