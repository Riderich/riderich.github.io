const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
    const closeMenu = () => {
        menuButton.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("open");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        siteNav.classList.toggle("open", !isOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) closeMenu();
    });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
