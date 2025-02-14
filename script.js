// const config = require('./config');
// const APIKey = config.apiKey;
// script.js
import { apiKey } from './config.js';
const APIKey = apiKey;
const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const cityInput = document.querySelector('#searchBar')
const searchBtn = document.querySelector('#searchBtn')
const img = document.querySelector('#weatherIcon')
async function main(city) {
        const response = await fetch(URL + city + `&appid=${APIKey}`);
        if(response.status === 404){
            weather.style.display = 'none';
            hide.style.display = 'flex';
            mainText.innerHTML = 'City not found! Invalid city name';
        }
        else if(cityInput.value === ''){
            mainText.innerHTML = 'Please enter a city name';
        }
        else{
            hide.style.display = 'none';
            weather.style.display = 'flex';
            var data = await response.json();
            // console.log(data);
    temp.innerHTML = Math.floor(data.main.temp) + "<sup>&deg;C</sup>";
    humidity.innerHTML = Math.floor(data.main.humidity);
    wind.innerHTML = Math.floor(data.wind.speed);
    cityName.innerHTML = data.name;
    if(data.weather[0].main == 'Clouds'){
        img.src = '/images/clouds.png';
    }
    else if(data.weather[0].main == 'Clear'){
        img.src = '/images/clear.png';
    }
    else if(data.weather[0].main == 'Rain'){
        img.src = '/images/rain.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        img.src = '/images/drizzle.png';
    }
    else if(data.weather[0].main == 'Mist'){
        img.src = '/images/mist.png';
    }
    else if(data.weather[0].main == 'Haze'){
        img.src = '/images/haze.png';
    }
    else{
            img.src = '/images/snow.png';
        }
    }
}   
searchBtn.addEventListener('click', () => {
    main(cityInput.value);
})