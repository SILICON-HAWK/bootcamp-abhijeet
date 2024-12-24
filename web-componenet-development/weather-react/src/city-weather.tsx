import React from 'react';
interface CityWeatherProps {
  data: {
    name: string;
    temperature: number;
    conditions: string;
    weatherIcon: string;
  };
}

const CityWeather: React.FC<CityWeatherProps> = ({ data }) => {
  return (
    <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6 mt-4 max-w-sm w-full">
      <h2 className="text-xl font-semibold" id="name">{data.name}</h2>
      <p className="text-2xl font-bold mt-2" id="temp">{data.temperature}°C</p>
      <p className="text-lg mt-1" id="desc">{data.conditions}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weatherIcon}.png`}
        alt={data.conditions}
        className="mt-4 w-16 h-16"
      />
    </div>
  );
};

export default CityWeather;
