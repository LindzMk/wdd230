const baseURL = "https://lindzmk.github.io/wdd230/";
const membersURL = `${baseURL}data/members.json`;

// Function to get random spotlight members
function getRandomSpotlightMembers(members, count = 3) {
    const qualifiedMembers = members.filter(member => member.membershiplevel === 'Gold' || member.membershiplevel === 'Silver');
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to create spotlight HTML
function createSpotlightMember(member) {
    return `
        <div class="spotlight-member">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.weburl}" target="_blank">Visit Website</a>
        </div>
    `;
}

// Function to display spotlight members
function displaySpotlights(data) {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = '';

    const spotlightMembers = getRandomSpotlightMembers(data.members);

    spotlightMembers.forEach(member => {
        spotlightContainer.innerHTML += createSpotlightMember(member);
    });
}

// Function to fetch and display data
async function fetchAndDisplaySpotlights() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displaySpotlights(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
