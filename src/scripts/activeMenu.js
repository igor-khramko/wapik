window.onload = addEventListener("load", showActivePage);
function showActivePage(){
    var navigationItem = document.querySelectorAll(".navigation__link");
    console.log(navigationItem);
    var pageName = document.title;
    console.log(pageName);
    for(i=0; i<navigationItem.length; i++){
        if(pageName.includes(navigationItem[i].innerHTML)){
            navigationItem[i].style.textDecoration = "underline";
            console.log(navigationItem[i]);
        }
    }
}