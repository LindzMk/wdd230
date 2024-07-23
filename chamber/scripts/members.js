const baseURL = "https://lindzmk.github.io/wdd230/chamber/data/members.json";
const memberContainer = document.querySelector("#member-container");
let membersData = [];

async function getMembersInfo(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        membersData = data.members;
        displayInfo(membersData);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayInfo(members) {
    memberContainer.innerHTML = ""; // Clear previous content

    members.forEach((member) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const weburl = document.createElement("a");
        const membLvl = document.createElement("p");

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = `Phone: ${member.phone}`;
        membLvl.textContent = `Membership Level: ${member.membershiplevel}`;

        // Display image only in grid view
        if (memberContainer.classList.contains("grid")) {
            const img = document.createElement("img");
            img.setAttribute("class", "member-logo");
            img.setAttribute("src", member.image);
            img.setAttribute("alt", `${member.name} logo`);
            img.setAttribute("loading", "lazy");
            card.appendChild(img);
        }

        weburl.setAttribute("href", member.weburl);
        weburl.setAttribute("target", "_blank");
        weburl.textContent = `${member.name} Website`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(weburl);
        card.appendChild(membLvl);

        memberContainer.appendChild(card);
    });
}

document.querySelector("#grid").addEventListener("click", () => {
    memberContainer.classList.add("grid");
    memberContainer.classList.remove("list");
    displayInfo(membersData); // Re-display data for grid view
});

document.querySelector("#list").addEventListener("click", () => {
    memberContainer.classList.add("list");
    memberContainer.classList.remove("grid");
    displayInfo(membersData); // Re-display data for list view
});

getMembersInfo(baseURL);

