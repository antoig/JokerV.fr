document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Fonction pour vérifier si une section est visible dans le viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Ajoute la classe 'visible' lorsque la section est dans le viewport
    function handleScroll() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    // Fonction pour gérer le clic sur les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Empêche le comportement par défaut du lien

            // Obtenir la cible de la section associée
            const targetId = this.getAttribute('href').substring(1);  // Retire le # pour avoir l'id
            const targetSection = document.getElementById(targetId);

            // Défilement fluide vers la section ciblée
            targetSection.scrollIntoView({
                behavior: 'smooth'  // Défilement fluide
            });
        });
    });

    // Appel initial et lors du défilement
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour les sections visibles dès le départ
});
