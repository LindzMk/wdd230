// Insert current year into the span with id 'yearDate'
document.getElementById('yearDate').textContent = new Date().getFullYear();

// Display last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu Toggle.js

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
    })
})

// Dark Mode Toggle
const modeButton = document.querySelector("#mode");
const body = document.body;

modeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        modeButton.textContent = "🔆";
    } else {
        modeButton.textContent = "🕶️";
    }
});

