
const visitDisplay = document.getElementById('visits');
const currentDate = new Date();
const currentTime = currentDate.getTime();

// Get the ms of the last visit
let lastVisit = Number(localStorage.getItem('lastVisitTime')) || 0;

const oneDayInMs = 1000 * 60 * 60 * 24;
let daysSinceLastVisit = Math.floor((currentTime - lastVisit) / oneDayInMs);

const minsSinceLastVisit = Math.ceil((currentTime - lastVisit) / (1000 * 60));

if (lastVisit == 0) {
    visitDisplay.innerHTML = `Welcome! Let us know if you have any questions.`;
} else if (daysSinceLastVisit == 0 && minsSinceLastVisit > 0) {
    visitDisplay.innerHTML = `Back so soon! Awesome!`;
} else if (daysSinceLastVisit == 1) {
    visitDisplay.innerHTML = `You last visited 1 day ago!`;
} else {
    visitDisplay.innerHTML = `You last visited ${daysSinceLastVisit} days ago!`;
}

localStorage.setItem('lastVisitTime', currentTime);

console.log('Last visit time:', lastVisit);
console.log('Current time:', currentTime);
console.log('Days since last visit:', daysSinceLastVisit);
console.log('Mins since last visit:', minsSinceLastVisit);