const header = document.querySelector(".site-header");
const menuToggle = header.querySelector(".menu-toggle");
const mobileViewport = window.matchMedia("(max-width: 1000px)");

function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
}

header.classList.add("menu-ready");
menuToggle.hidden = false;

menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
});

header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuToggle.focus();
    }
});

mobileViewport.addEventListener("change", closeMenu);
