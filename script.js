const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".header__menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
