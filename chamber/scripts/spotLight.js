document.addEventListener("DOMContentLoaded", function () {
    fetch('/data/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;
            const eligibleMembers = members.filter(member => member.membershiplevel === 'Gold' || member.membershiplevel === 'Silver');
            const spotlightMembers = getRandomMembers(eligibleMembers, 2);

            const spotlightContainer = document.getElementById('spotlight-container');
            spotlightMembers.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.classList.add('spotlight-member');
                memberElement.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.weburl}" target="_blank">Visit Website</a>
                `;
                spotlightContainer.appendChild(memberElement);
            });
        })
        .catch(error => console.error('Error fetching member data:', error));

    function getRandomMembers(arr, num) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    // Function to create spotlight elements
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

    // Function to populate the spotlight container
    function populateSpotlights() {
        const spotlightContainer = document.getElementById('spotlight-container');

        // Clear previous content
        spotlightContainer.innerHTML = '';

        // Get random spotlight members
        const spotlightMembers = getRandomSpotlightMembers(membersData.members);

        // Add each spotlight member to the container
        spotlightMembers.forEach(member => {
            spotlightContainer.innerHTML += createSpotlightMember(member);
        });
    }

    // Call the function to populate the spotlight section
    populateSpotlights();
});