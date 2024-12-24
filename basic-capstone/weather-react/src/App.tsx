import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from './weather-api';
import CityWeather from './city-weather';
import './index.css';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('Los Angeles');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchDefaultWeatherData = async () => {
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
        setError('');
      } catch (err) {
        setError('Could not fetch weather data. Please try again.');
        setWeatherData(null);
      }
    };
    fetchDefaultWeatherData();
  }, []);

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-2xl font-bold mb-4 text-white">Weather App</h1>
      <div className="flex flex-row items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="border border-gray-600 rounded p-2 mb-4 text-white bg-blue-950 mr-5"
        />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded p-2 mb-4"
        >
        Search
      </button>
        </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weatherData && <CityWeather data={weatherData} />}
    </div>
  );
};

export default App;