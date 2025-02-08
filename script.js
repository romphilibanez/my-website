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

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".project-card img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector(".close").addEventListener("click", () => {
                modal.remove();
            });
        });
    });
});
