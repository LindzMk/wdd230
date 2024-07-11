const baseURL = "https://lindzmk.github.io/wdd230/";
const linksURL = "https://lindzmk.github.io/wdd230/data/links.json";

const links = document.querySelector('#links');

const getLinks = async () => {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);  // Test the JSON result
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let weekTitle = document.createElement('h4');
        weekTitle.textContent = week.week;
        links.appendChild(weekTitle);

        week.links.forEach((link, index) => {
            let linkURL = document.createElement('a');
            linkURL.textContent = link.title;
            linkURL.href = link.url.startsWith('http') ? link.url : `${baseURL}${link.url}`;
            links.appendChild(linkURL);

            if (index < week.links.length - 1) {
                let separator = document.createTextNode(" | ");
                links.appendChild(separator);
            }
        });
    });
};

// Call the getLinks function to fetch and display the data
getLinks();