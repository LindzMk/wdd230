const baseURL = "https://lindzmk.github.io/wdd230/chamber/data/members.json";
const memberContainer = document.querySelector("#member-container");

async function getMembersInfo(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayInfo(data.members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayInfo(members) {
    memberContainer.innerHTML = ""; // Clear previous content

    members.forEach((member, index) => {
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

        // Display first 4 companies inline, rest in grid or list format
        if (index < 4 && memberContainer.classList.contains("grid")) {
            card.style.display = "inline-block";
            card.style.width = "calc(25% - 20px)";
            card.style.verticalAlign = "top";
            card.style.margin = "0 10px 10px 0";
            card.style.textAlign = "center";
        }

        memberContainer.appendChild(card);
    });
}

document.querySelector("#grid").addEventListener("click", () => {
    memberContainer.classList.add("grid");
    memberContainer.classList.remove("list");
    getMembersInfo(baseURL); // Reload data for grid view
});

document.querySelector("#list").addEventListener("click", () => {
    memberContainer.classList.add("list");
    memberContainer.classList.remove("grid");
    getMembersInfo(baseURL); // Reload data for list view
});

getMembersInfo(baseURL);