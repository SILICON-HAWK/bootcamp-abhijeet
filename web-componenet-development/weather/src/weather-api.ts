import axios from "axios";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

interface WeatherData {
  name: string;
  temperature: number;
  conditions: string;
  weatherIcon: string;
}

async function fetchWeatherData(city: string): Promise<WeatherData> {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    const data = response.data;
    return {
      name: data.name,
      temperature: data.main.temp,
      conditions: data.weather[0].description,
      weatherIcon: data.weather[0].icon,
    };
  } catch (error) {
    throw error;
  }
}

export { fetchWeatherData };