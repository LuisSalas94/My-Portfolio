let menu = document.querySelector("#icon");
let navbar = document.querySelector("nav");
menu.addEventListener("click", function() {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
});

window.addEventListener("scroll", function(){
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");
});