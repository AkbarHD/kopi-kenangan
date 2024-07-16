const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
})

document.addEventListener("click", (e) => {
    // jika di klik di luar nav dan hamburger menu
    if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        navbarNav.classList.remove("active"); // hapus class active
    }
})