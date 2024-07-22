
const baseURL = "https://lindzmk.github.io/wdd230/chamber/data/members.json";
const spotlightContainer = document.querySelector("#spotlight-container");
const banner = document.querySelector("#event-banner");
const closeBannerBtn = document.querySelector("#close-banner");

// Function to get and display member info
async function getMembersInfo(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displaySpotlight(data.members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display spotlight members
function displaySpotlight(members) {
    spotlightContainer.innerHTML = ""; // Clear previous content

    // Filter members with Silver or Gold membership
    const filteredMembers = members.filter(member => member.membershiplevel === "Silver" || member.membershiplevel === "Gold");

    // Randomly select 2-3 members
    const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffledMembers.slice(0, 3);

    // Create and append member cards
    selectedMembers.forEach((member) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const weburl = document.createElement("a");

        const img = document.createElement("img");
        img.setAttribute("class", "member-logo");
        img.setAttribute("src", member.image);
        img.setAttribute("alt", `${member.name} logo`);
        img.setAttribute("loading", "lazy");

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = `Phone: ${member.phone}`;
        weburl.setAttribute("href", member.weburl);
        weburl.setAttribute("target", "_blank");
        weburl.textContent = `${member.name} Website`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(weburl);

        spotlightContainer.appendChild(card);
    });
}

// Function to show banner on Monday, Tuesday, and Wednesday
function showBanner() {
    const today = new Date().getDay();
    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}

// Event listener to close the banner
closeBannerBtn.addEventListener("click", () => {
    banner.style.display = "none";
});

getMembersInfo(baseURL);
showBanner();







