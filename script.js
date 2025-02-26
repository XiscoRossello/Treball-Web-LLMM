document.addEventListener('DOMContentLoaded', function() {
    // Island form submission
    const islandForm = document.getElementById('islandForm');
    if (islandForm) {
        islandForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const selectedIsland = document.getElementById('filter').value;
            if (selectedIsland) {
                window.location.href = selectedIsland;
            } else {
                alert("Por favor, elige una isla.");
            }
        });
    }

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(themeIcon, savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(themeIcon, newTheme);
        });
    }

    // Comments section functionality
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

    // Social icons hover effect
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

function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}