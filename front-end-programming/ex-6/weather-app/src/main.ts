import axios from "axios";
import './style.css'

// DOM Elements
const button = document.getElementById("button") as HTMLButtonElement;
const inputvalue = document.getElementById("inputValue") as HTMLInputElement;
const nameVal = document.getElementById("name") as HTMLDivElement;
const temp = document.getElementById("temp") as HTMLDivElement;
const desc = document.getElementById("desc") as HTMLDivElement;

// OpenWeatherMap API Configuration
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data
async function fetchWeather(city: string) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });

    displayWeather(response.data);
  } catch (error) {
    console.error(error);
    temp.innerText = "Unable to fetch weather.";
  }
}

// Function to display weather data
function displayWeather(weather: any) {
  nameVal.innerText = weather.name;
  temp.innerText = `${weather.main.temp}°C`;
  desc.innerText = weather.weather[0].description;
}

// Event Listener
button.addEventListener("click", () => {
  const city = inputvalue.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    temp.innerText = "Please enter a city name.";
  }
});