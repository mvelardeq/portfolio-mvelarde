const navBar = document.getElementById("navbar");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const linkMenu = document.querySelectorAll(".navItem");
const backTopButton = document.getElementById("back-top");

function disableScroll() {
    window.scrollTo(0, 0);
}
function verifySizeOfWindow() {
    if (window.innerWidth > 640) {
        menuIcon.classList.add("hidden");
        navBar.classList.remove("hidden");
    } else {
        menuIcon.classList.remove("hidden");
        navBar.classList.add("hidden");
        navBar.classList.remove("mobileMenu");
        closeIcon.classList.add("hidden");
    }
}
function backTopShow() {
    if (window.scrollY === 0) {
        backTopButton.classList.add("hidden");
    } else {
        backTopButton.classList.remove("hidden");
    }
}
window.addEventListener("scroll", (e) => backTopShow());

menuIcon.addEventListener("click", (e) => {
    e.target.classList.add("hidden");
    navBar.classList.remove("hidden");
    navBar.classList.add("mobileMenu");
    closeIcon.classList.remove("hidden");
    console.log("hola");
    window.addEventListener("scroll", disableScroll);
});

closeIcon.addEventListener("click", (e) => {
    menuIcon.classList.remove("hidden");
    navBar.classList.add("hidden");
    navBar.classList.remove("mobileMenu");
    closeIcon.classList.add("hidden");
    window.removeEventListener("scroll", disableScroll);
});

window.addEventListener("resize", (e) => {
    verifySizeOfWindow();
});
verifySizeOfWindow();

linkMenu.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (window.innerWidth <= 640) {
            menuIcon.classList.remove("hidden");
            navBar.classList.add("hidden");
            navBar.classList.remove("mobileMenu");
            closeIcon.classList.add("hidden");
            window.removeEventListener("scroll", disableScroll);
        }
    });
});

const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const styleLink = document.getElementById("styleLink");
sunIcon.addEventListener("click", (e) => {
    e.target.classList.toggle("hidden");
    moonIcon.classList.toggle("hidden");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
});
moonIcon.addEventListener("click", (e) => {
    e.target.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
});

const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        console.log(currentTheme);
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    }
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    document.documentElement.setAttribute("data-theme", "dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
}
