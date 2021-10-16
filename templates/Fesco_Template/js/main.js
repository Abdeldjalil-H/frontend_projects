const navList = document.querySelector("nav ul");
document.querySelector("nav .toggle-menu").addEventListener("click", hideNavList);
const logo = document.querySelector("nav .logo");
const scrollBtn = document.querySelector(".scroll-up-btn");

const smallScreenMaxWidth = 767;

window.addEventListener("DOMContentLoaded", () => addNavListListener());
window.addEventListener("resize", () => addNavListListener());

function hideNavList() {
    navList.classList.toggle("hide-sm");
    logo.classList.toggle("fixed");
}

function addNavListListener(){
    if(document.body.clientWidth <= smallScreenMaxWidth) {
        navList.addEventListener("click", hideNavList);
    } else {
        navList.removeEventListener("click", hideNavList);
    }
}

// scroll top btn

scrollBtn.addEventListener("click", () => window.scrollTo(0,0));

window.addEventListener("scroll", ()=> {
    if(window.scrollY > window.innerHeight) {
        scrollBtn.classList.remove("hide");
    } else {
        scrollBtn.classList.add("hide");
    }
});