const baseURL = "https://lindzmk.github.io/wdd230/";
const linksURL = "https://lindzmk.github.io/wdd230/data/links.json";

const links = document.querySelector('#links');

const getLinks = async () => {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

const displayLinks = (weeks) => {
    weeks.lessons.forEach((lesson) => {

        let weekTitle = document.createElement('h4');
        weekTitle.textContent = `Week ${lesson.lesson}`;
        links.appendChild(weekTitle);

        lesson.links.forEach((link, index) => {
            let linkURL = document.createElement('a');
            linkURL.textContent = link.title;
            linkURL.href = link.url;
            links.appendChild(linkURL);


            if (index < lesson.links.length - 1) {
                let separator = document.createTextNode(" | ");
                links.appendChild(separator);
            }
        });
    })
};

getLinks();