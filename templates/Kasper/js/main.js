const navList = document.querySelector("nav ul");
document.querySelector("nav .toggle-menu").addEventListener("click", hideNavList);

const smallScreenMaxWidth = 767;

window.addEventListener("DOMContentLoaded", () => addNavListListener());
window.addEventListener("resize", () => addNavListListener());

function hideNavList() {
    navList.classList.toggle("hide-sm");
}

function addNavListListener(){
    if(document.body.clientWidth <= smallScreenMaxWidth) {
        navList.addEventListener("click", hideNavList);
    } else {
        navList.removeEventListener("click", hideNavList);
    }
}

// Portfolio projects filter
const filters = document.querySelectorAll(".portfolio .filters li");
let projects = document.querySelectorAll(".portfolio .projects div");

filters.forEach(filter => {
    filter.onclick = function () {
        filters.forEach(li => li.classList.remove("active"));
        this.classList.add("active");
        const cat = this.dataset.cat;
        projects.forEach(prj => 
            prj.dataset.cat.includes(cat) ? 
            prj.classList.remove("hide") : 
            prj.classList.add("hide")
        );
    }
});