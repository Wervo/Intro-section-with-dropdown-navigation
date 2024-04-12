const openBtn = document.getElementById("open-btn");
const exitBtn = document.getElementById("exit-btn");
const navBar = document.querySelector(".mobilenav");
const arrowBtn = document.getElementById("arrow-btn");
const arrow1Btn = document.getElementById("arrow1-btn");
const menuFirst = document.querySelector(".submenu");
const menuSecond = document.querySelector(".submenu2");

openBtn.addEventListener('click',function(){
        navBar.style.visibility = "visible";
        exitBtn.style.visibility = "visible";
    
});

exitBtn.addEventListener('click',function(){
        navBar.style.visibility = "hidden";
        exitBtn.style.visibility = "hidden";
});

arrowBtn.addEventListener('click', function() {
    if (arrowBtn.style.transform === "rotate(180deg)") {
        arrowBtn.style.transform = "rotate(0deg)";
    } else {
        arrowBtn.style.transform = "rotate(180deg)";
    }

    if(menuFirst.style.display === "none" || menuFirst.style.display === ""){
        menuFirst.style.display = "flex";
    } else {
        menuFirst.style.display = "none";
    }
});

arrow1Btn.addEventListener('click', function() {
    if (arrow1Btn.style.transform === "rotate(180deg)") {
        arrow1Btn.style.transform = "rotate(0deg)";
    } else {
        arrow1Btn.style.transform = "rotate(180deg)";
    }

    if(menuSecond.style.display === "none" || menuSecond.style.display === ""){ 
        menuSecond.style.display = "flex";
    } else {
        menuSecond.style.display = "none";
    }
});