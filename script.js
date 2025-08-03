﻿// Add fade-in animation for sections
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".card, .hero-content, .hero-image");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
