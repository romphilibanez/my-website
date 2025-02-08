document.addEventListener("DOMContentLoaded", function() {
    const contactLinks = document.querySelectorAll(".contact a");

    contactLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#ffcc00";
        });

        link.addEventListener("mouseleave", function() {
            link.style.color = "#007bff";
        });
    });
});
