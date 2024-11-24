document.getElementById('islandForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    const selectedIsland = document.getElementById('filter').value;

    if (selectedIsland) {
        window.location.href = selectedIsland; // Redirects to the chosen island's HTML page
    } else {
        alert("Por favor, elige una isla.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
});

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Desplazamiento horizontal en el contenedor de imágenes
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}