window.onload = addEventListener("load", showActivePage);
function showActivePage(){
    var navigationItem = document.querySelectorAll(".navigation__link");
    var pageName = document.title;
    for(i=0; i<navigationItem.length; i++){
        if(pageName.includes(navigationItem[i].innerHTML)){
            navigationItem[i].style.textDecoration = "underline";
        }
    }
}