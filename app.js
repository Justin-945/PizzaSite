const sideNavBtn = document.querySelector("#side-nav-toggle");
const sideNav = document.querySelector(".side-nav");

sideNavBtn.addEventListener('click', function() {
    sideNav.classList.toggle("active");
})
