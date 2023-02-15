const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

weatherBox.style.visibility  = "hidden";
weatherDetails.style.visibility  = "hidden";

search.addEventListener('click', () => {
    const APIKey = "ce2f9276234e553abda46b262d77bdc5";
    const city = document.querySelector(".search-box input").value;

    if (city === "")
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);

            weatherBox.style.visibility = "visible";
            weatherDetails.style.visibility = "visible";

            const temperature = document.querySelector(".weather-box .temperature");
            const description = document.querySelector(".weather-box .description");
            const humidity = document.querySelector(".weather-details .humidity .text span");
            const wind = document.querySelector(".weather-details .wind .text span");

            temperature.innerHTML = `${parseInt(json.main.temp)}°C`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    })
})