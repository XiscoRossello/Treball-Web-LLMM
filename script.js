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

// Array of property objects
const properties = [
    {
        id: 1,
        title: "Casa en Venta - 3 Dormitorios",
        description: "Casa o chalet independiente con vistas al mar",
        price: 150000,
        location: "Mallorca",
        bedrooms: 3,
        bathrooms: 2,
        squareMeters: 250,
        views: 1520,
        features: [
            "3 Dormitorios amplios",
            "2 Baños completos",
            "Cocina moderna",
            "Amplio jardín",
            "Garaje para 2 autos",
            "Excelente iluminación natural"
        ]
    },
    {
        id: 2,
        title: "Casa en Venta - 4 Dormitorios",
        description: "Espectacular villa con vistas panorámicas",
        price: 980000,
        location: "Mallorca",
        bedrooms: 4,
        bathrooms: 3,
        squareMeters: 280,
        views: 2100,
        features: [
            "4 Dormitorios",
            "3 Baños completos",
            "Cocina equipada",
            "Terraza con vistas",
            "Piscina privada",
            "Jardín paisajístico"
        ]
    },
    {
        id: 3,
        title: "Casa en Venta - Villa de Lujo",
        description: "Villa exclusiva con acabados de alta calidad",
        price: 1200000,
        location: "Menorca",
        bedrooms: 5,
        bathrooms: 4,
        squareMeters: 350,
        views: 3200,
        features: [
            "5 Dormitorios de lujo",
            "4 Baños de diseño",
            "Cocina de chef",
            "Sala de cine",
            "Piscina infinita",
            "Garaje para 4 coches"
        ]
    },
    {
        id: 4,
        title: "Casa en Venta - 3 Dormitorios",
        description: "Casa moderna con diseño contemporáneo",
        price: 450000,
        location: "Mallorca",
        bedrooms: 3,
        bathrooms: 2,
        squareMeters: 150,
        views: 890,
        features: [
            "4 Dormitorios espaciosos",
            "3 Baños modernos",
            "Cocina equipada",
            "Jardín amplio",
            "Garaje para 3 vehículos",
            "Excelente ventilación natural"
        ]
    },
    {
        id: 5,
        title: "Casa en Venta - Ático de Lujo",
        description: "Ático exclusivo con vistas panorámicas",
        price: 750000,
        location: "Ibiza",
        bedrooms: 3,
        bathrooms: 2,
        squareMeters: 200,
        views: 4500,
        features: [
            "3 Dormitorios",
            "2 Baños de lujo",
            "Terraza panorámica",
            "Cocina de diseño",
            "Plaza de garaje",
            "Piscina comunitaria"
        ]
    },
    {
        id: 6,
        title: "Casa en Venta - Villa Moderna",
        description: "Villa moderna con tecnología smart home",
        price: 1450000,
        location: "Ibiza",
        bedrooms: 4,
        bathrooms: 3,
        squareMeters: 300,
        views: 2800,
        features: [
            "4 Dormitorios smart",
            "3 Baños de diseño",
            "Domótica integral",
            "Piscina climatizada",
            "Garaje inteligente",
            "Jardín zen"
        ]
    },
    {
        id: 7,
        title: "Casa en Venta - Casa Familiar",
        description: "Casa familiar con amplias zonas verdes",
        price: 550000,
        location: "Menorca",
        bedrooms: 4,
        bathrooms: 2,
        squareMeters: 220,
        views: 1750,
        features: [
            "4 Dormitorios familiares",
            "2 Baños completos",
            "Jardín espacioso",
            "Zona de juegos",
            "Garaje doble",
            "Barbacoa exterior"
        ]
    },
    {
        id: 8,
        title: "Casa en Venta - Chalet de Lujo",
        description: "Chalet de lujo con vistas al mar",
        price: 2100000,
        location: "Mallorca",
        bedrooms: 6,
        bathrooms: 5,
        squareMeters: 400,
        views: 5200,
        features: [
            "6 Dormitorios de lujo",
            "5 Baños completos",
            "Spa privado",
            "Bodega",
            "Piscina infinity",
            "Helipuerto"
        ]
    },
    {
        id: 9,
        title: "Casa en Venta - Villa Mediterránea",
        description: "Villa con estilo mediterráneo tradicional",
        price: 850000,
        location: "Ibiza",
        bedrooms: 4,
        bathrooms: 3,
        squareMeters: 280,
        views: 2400,
        features: [
            "4 Dormitorios mediterráneos",
            "3 Baños con mosaicos",
            "Patio interior",
            "Huerto orgánico",
            "Terraza solárium",
            "Zona chill-out"
        ]
    },
    {
        id: 10,
        title: "Casa en Venta - 3 Dormitorios",
        description: "Casa moderna con diseño sostenible",
        price: 1250000,
        location: "Ibiza",
        bedrooms: 3,
        bathrooms: 3,
        squareMeters: 252,
        views: 3100,
        features: [
            "3 habitaciones",
            "3 baños",
            "Parcela de 678 m²",
            "Terraza y balcón",
            "Plaza de garaje incluida",
            "Piscina"
        ]
    }
];

// Filter function by price
function filterByPrice(maxPrice) {
    const filteredProperties = properties.filter(property => property.price <= maxPrice);
    console.log('Properties under', maxPrice, '€:');
    console.table(filteredProperties);
    return filteredProperties;
}

// Filter function by location
function filterByLocation(location) {
    const filteredProperties = properties.filter(property => property.location === location);
    console.log('Properties in', location, ':');
    console.table(filteredProperties);
    return filteredProperties;
}

// Sort function by price
function sortByPrice(ascending = true) {
    const sortedProperties = [...properties].sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
    });
    console.log('Properties sorted by price (' + (ascending ? 'ascending' : 'descending') + '):');
    console.table(sortedProperties);
    return sortedProperties;
}

// Sort function by title
function sortByTitle(ascending = true) {
    const sortedProperties = [...properties].sort((a, b) => {
        return ascending 
            ? a.title.localeCompare(b.title) 
            : b.title.localeCompare(a.title);
    });
    console.log('Properties sorted by title (' + (ascending ? 'ascending' : 'descending') + '):');
    console.table(sortedProperties);
    return sortedProperties;
}

// Sort by views
function sortByViews(ascending = true) {
    const sortedProperties = [...properties].sort((a, b) => {
        return ascending ? a.views - b.views : b.views - a.views;
    });
    console.log('Properties sorted by views (' + (ascending ? 'ascending' : 'descending') + '):');
    console.table(sortedProperties);
    return sortedProperties;
}

// Example usage (uncomment to test):
// filterByPrice(500000);
// filterByLocation('Mallorca');
// sortByPrice(true);
// sortByTitle(true);
// sortByViews(false);