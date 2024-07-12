const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '0ccd9b393e3ed1a92fbb3921d3647028';


const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// Build the displayResults function to output to the given HTML document
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg; F`;

    // Check if weather data and icon URL are available
    if (data.weather && data.weather.length > 0) {
        const iconCode = data.weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
        const desc = data.weather[0].description;

        // Check if iconsrc is not empty
        if (iconCode && iconsrc) {
            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', desc);
            captionDesc.textContent = desc;
        } else {
            console.error('Weather icon URL is empty or undefined');
        }
    } else {
        console.error('Weather data is incomplete or missing');
    }
}