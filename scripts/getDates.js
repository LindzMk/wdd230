// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// menuToggle.js

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            hamburger.innerHTML = '&#9776;'; // Hamburger icon
        } else {
            navMenu.classList.add('show');
            hamburger.innerHTML = '&times;'; // 'X' icon
        }
    });
});