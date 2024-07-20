const display = document.querySelector(".visits");
let visits = Number(localStorage.getItem("numVisits")) || 0;

if (visits == 0) {
    display.textContent = "Welcome, this is your first visit!"
}
else {
    display.textContent = visits;
}

visits++;

localStorage.setItem("numVisits", visits);