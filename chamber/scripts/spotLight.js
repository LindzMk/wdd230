document.addEventListener('DOMContentLoaded', () => {
    const jsonUrl = 'data/members.json';

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const goldSilverMembers = data.members.filter(member =>
                member.membershiplevel === 'Gold' || member.membershiplevel === 'Silver'
            );

            const spotlightMembers = [];
            while (spotlightMembers.length < 3 && goldSilverMembers.length > 0) {
                const randomIndex = Math.floor(Math.random() * goldSilverMembers.length);
                spotlightMembers.push(goldSilverMembers.splice(randomIndex, 1)[0]);
            }

            const spotlightContainer = document.getElementById('spotlight-container');
            spotlightMembers.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                memberCard.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.weburl}" target="_blank">Visit Website</a>
                `;

                spotlightContainer.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error fetching or parsing data:', error));
});
``