import { useState, useEffect } from 'react';

type WeatherData = {
  temp?: number;
  feels_like?: number;
  humidity?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
};

type WeatherResponse = {
  main: WeatherData;
  weather: [{ description: string }];
  name: string;
};

export default function Search() {
  const [weatherData, setWeatherData] = useState<WeatherData>({});

  useEffect(() => {
    async function fetchWeather() {
      let city = 'London';
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fde153f3844b17e39f35c5a4dda52b52&units=metric`
      );
      const data: WeatherResponse = await res.json();
      setWeatherData(data.main);
      console.log(data.main);
    }
    fetchWeather();
  }, []);

  return (
    <div>
      <h1>London</h1>
      <p>Temperature: {weatherData.temp}</p>
      <p>Feels like: {weatherData.feels_like}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Min: {weatherData.temp_min}</p>
      <p>Max: {weatherData.temp_max}</p>
    </div>
  );
}