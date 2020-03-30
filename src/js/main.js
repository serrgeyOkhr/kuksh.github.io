var menuButton = document.querySelector(".nav_burger");
var closeButton = document.querySelector(".menu_button");
var popupMenu = document.querySelector(".menu");
menuButton.addEventListener("click", function cli(event) {
    event.preventDefault();
    popupMenu.classList.remove("menu_display")
    document.body.style.overflow = 'hidden';
});

function close(event) {
    event.preventDefault();
    popupMenu.classList.add("menu_display")
    document.body.style.overflow = 'visible';
}

closeButton.addEventListener("click", close);

document.body.addEventListener('touchmove',function(event){event.preventDefault();},false);


