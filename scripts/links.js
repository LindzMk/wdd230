const baseURL = "https://lindzmk.github.io/wdd230/";
const linksURL = "https://lindzmk.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
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
            anchor.href = link.url;
            anchor.textContent = link.title;

            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        learningActivities.appendChild(weekTitle);
        learningActivities.appendChild(linksList);
    });
}

getLinks();
