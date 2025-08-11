document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });

    // Optional: Close the mobile menu when a link is clicked
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (!navMenu.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
            }
        });
    });
});