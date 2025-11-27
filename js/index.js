// Gestion du menu burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Gestion de la navbar au scroll et au mouvement de la souris
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll vers le bas
        navbar.classList.add('hidden');
    } else {
        // Scroll vers le haut
        navbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;

    // Réinitialiser le timeout
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        navbar.classList.remove('hidden');
    }, 2000);
});

// Apparition de la navbar au survol du haut de l'écran
window.addEventListener('mousemove', (e) => {
    if (e.clientY < 100) {
        navbar.classList.remove('hidden');
    }
});

// Gestion du formulaire
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    e.target.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll(".product-box").forEach(box => {
    const videos = box.querySelectorAll(".demo-video");
    let index = 0;

    videos[0].play();

    videos.forEach((video, i) => {
        video.addEventListener("ended", () => {
            videos[i].classList.add("hidden");

            index = (i + 1) % videos.length;

            videos[index].classList.remove("hidden");
            videos[index].play();
        });
    });
});

