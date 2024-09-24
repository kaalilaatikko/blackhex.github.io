let currentSlide = 0;

function toggleMenu() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.burger') && !event.target.matches('#dropdownMenu a')) {
        const dropdown = document.getElementById("dropdownMenu");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}

function changeSlide(direction) {
    const slides = document.getElementsByClassName("slide");
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[0].style.display = "block";
});

