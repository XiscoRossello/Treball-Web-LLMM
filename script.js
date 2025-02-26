document.getElementById('islandForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    const selectedIsland = document.getElementById('filter').value;

    if (selectedIsland) {
        window.location.href = selectedIsland; // Redirects to the chosen island's HTML page
    } else {
        alert("Por favor, elige una isla.");
    }
});

// Hamburger menu functionality
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

// Slider functionality
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

    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Comments section functionality
document.addEventListener('DOMContentLoaded', function() {
    const showMessagesBtn = document.getElementById('showMessages');
    const messagesList = document.getElementById('messagesList');

    if (showMessagesBtn && messagesList) {
        showMessagesBtn.addEventListener('click', function() {
            if (messagesList.style.display === 'none') {
                messagesList.style.display = 'block';
                this.textContent = 'Cerrar comentarios';
            } else {
                messagesList.style.display = 'none';
                this.textContent = 'Abrir sección de comentarios';
            }
        });
    }

    const sendQuickMessage = document.getElementById('sendQuickMessage');
    if (sendQuickMessage) {
        sendQuickMessage.addEventListener('click', function() {
            const name = document.getElementById('quickName').value;
            const message = document.getElementById('quickMessage').value;
            
            if (name && message) {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'message-item';
                commentDiv.innerHTML = `<strong>${name}:</strong> ${message}`;
                document.getElementById('commentsContainer').prepend(commentDiv);
                
                document.getElementById('quickName').value = '';
                document.getElementById('quickMessage').value = '';
            } else {
                alert('Por favor, rellena todos los campos');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icons a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.color = '#FFD700'; // Golden yellow
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });
});