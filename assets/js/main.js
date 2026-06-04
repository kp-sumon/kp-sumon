// Digital Universe Architecture Master JS Control Flow
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Responsive Handler
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    
    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            menu.classList.toggle("block");
            menu.classList.toggle("glass");
            menu.classList.toggle("absolute");
            menu.classList.toggle("top-16");
            menu.classList.toggle("left-0");
            menu.classList.toggle("w-full");
            menu.classList.toggle("p-6");
        });
    }

    // 2. Local-Storage Enabled Theme Manager (Dark/Light)
    const themeBtn = document.getElementById("theme-toggle");
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }
    
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // 3. Scroll Intersection Observer for Premium Viewport Animations
    const fadeItems = document.querySelectorAll(".fade-up");
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeItems.forEach(item => {
        scrollObserver.observe(item);
    });
});
                  
