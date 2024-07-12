const baseURL = "https://lindzmk.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayLinks(weeks) {
    const learningActivities = document.getElementById("learningActivities");


    weeks.weeks.forEach(week => {
        const weekContainer = document.createElement("div");
        weekContainer.classList.add("week");

        const weekText = document.createElement("p");
        weekText.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement("a");
            anchor.href = link.url.startsWith('http') ? link.url : `${baseURL}${link.url}`;
            anchor.textContent = link.title;

            weekText.appendChild(anchor);
            if (index < week.links.length - 1) {
                weekText.appendChild(document.createTextNode(' | '));
            }
        });

        weekContainer.appendChild(weekText);
        learningActivities.appendChild(weekContainer);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getLinks();
});







