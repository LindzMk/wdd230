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
        const weekTitle = document.createElement("h3");
        weekTitle.textContent = week.week;

        const linksList = document.createElement("ul");

        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = link.url.startsWith('http') ? link.url : `${baseURL}${link.url}`;
            anchor.textContent = link.title;

            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        learningActivities.appendChild(weekTitle);
        learningActivities.appendChild(linksList);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getLinks();
});
