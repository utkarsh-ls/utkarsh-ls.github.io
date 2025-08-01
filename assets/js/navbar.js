document.addEventListener("DOMContentLoaded", function () {
    const navbarPath = location.pathname.includes("/pages/")
        ? "../assets/components/navbar.html"
        : "assets/components/navbar.html";

    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            // Highlight active link
            let currentPage = location.pathname.split("/").pop().replace(".html", "");
            if (currentPage === "" || currentPage === "index") currentPage = "home";

            document.querySelectorAll(".nav-link").forEach(link => {
                if (link.dataset.page === currentPage) {
                    link.classList.add("active-link");
                }
            });

            // Responsive toggle
            const toggleBtn = document.getElementById("nav-toggle");
            const navLinks = document.querySelector(".nav-links");

            if (toggleBtn && navLinks) {
                toggleBtn.addEventListener("click", () => {
                    navLinks.classList.toggle("open");
                });
            }
        });
});
