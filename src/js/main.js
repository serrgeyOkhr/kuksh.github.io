var closeMenu = document.querySelector(".nav_section");
var menuButton = document.querySelector(".Menu_trigger");
var closeButton = document.querySelector(".menu_button");

menuButton.addEventListener("click", function cli(event) {

    
    closeMenu.style.display = 'none';
});

function close(event) {
    closeMenu.style.display = 'block';
}

closeButton.addEventListener("click", close);