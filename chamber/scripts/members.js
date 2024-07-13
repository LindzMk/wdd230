const baseURL = "https://lindzmk.github.io/wdd230/chamber/data/members.json";
const div = document.querySelector("#member-cards");
async function getMembersInfo(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayinfo(data.members);
}

function displayinfo(members) {
    members.forEach((member) => {
        const card = document.createElement("section");
        const img = document.createElement("img");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const weburl = document.createElement("a");
        const membLvl = document.createElement("p");

        img.setAttribute("class", "member-logo");
        img.setAttribute("src", `${member.image}`);
        img.setAttribute("alt", `${member.name} logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "400");

        weburl.setAttribute("href", `${member.weburl}`);
        weburl.setAttribute("target", "_blank");
        weburl.textContent = `${member.name} Website`;

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        membLvl.textContent = `Membership Level: ${member.membershiplevel}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(weburl);
        card.appendChild(membLvl);

        div.appendChild(card);
    })
}

getMembersInfo(url);