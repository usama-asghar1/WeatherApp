import { useState, useEffect } from 'react';

type WeatherDataProps = {
  main: {
    temp?: number;
    feels_like?: number;
    humidity?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
  };
  weather: [{ description: string }];
};

type WeatherResponse = {
  main: WeatherDataProps;
  weather: [{ description: string }];
  name: string;
};

export default function WeatherData() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>({
    main: {},
    weather: [{ description: '' }],
  });

  useEffect(() => {
    async function fetchWeather() {
      let city = 'London';
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fde153f3844b17e39f35c5a4dda52b52&units=metric`
      );
      const data: WeatherResponse = await res.json();
      setWeatherData(data.main);
      console.log(data);
      console.log(data.main);
      console.log(data.weather[0].description);
    }
    fetchWeather();
  }, []);

  return (
    <div>
      <h1>London</h1>
      <p>Temperature: {weatherData.main?.temp}</p>
      <p>Feels like: {weatherData.main?.feels_like}</p>
      <p>Humidity: {weatherData.main?.humidity}</p>
      <p>Min: {weatherData.main?.temp_min}</p>
      <p>Max: {weatherData.main?.temp_max}</p>
      <p>Description: {weatherData.weather[0]?.description}</p>
    </div>
  );
}
