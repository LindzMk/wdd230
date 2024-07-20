document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '0ccd9b393e3ed1a92fbb3921d3647028';
    const city = 'Boksburg,ZA';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    async function fetchWeatherData() {
        try {
            const [currentWeatherResponse, forecastResponse] = await Promise.all([
                fetch(currentWeatherUrl),
                fetch(forecastUrl)
            ]);

            const currentWeatherData = await currentWeatherResponse.json();
            const forecastData = await forecastResponse.json();

            displayCurrentWeather(currentWeatherData);
            displayForecast(forecastData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function displayCurrentWeather(data) {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        document.getElementById('current-temp').innerText = temp;
        document.getElementById('current-desc').innerText = description;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById('weather-caption').innerText = description;
    }

    function displayForecast(data) {
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = '';

        const forecastItems = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
        forecastItems.forEach(item => {
            const date = new Date(item.dt_txt);
            const temp = item.main.temp;
            const description = item.weather[0].description;
            const icon = item.weather[0].icon;

            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-item');
            forecastElement.innerHTML = `
                <strong>${date.toDateString()}</strong>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
                <p>${temp}°C, ${description}</p>
            `;
            forecastContainer.appendChild(forecastElement);
        });
    }

    fetchWeatherData();
});