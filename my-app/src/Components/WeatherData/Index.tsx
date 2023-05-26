// import { useState, useEffect } from "react";

// type WeatherDataProps = {
//   main: {
//     temp?: number;
//     feels_like?: number;
//     humidity?: number;
//     temp_min?: number;
//     temp_max?: number;
//     pressure?: number;
//   };
//   weather: [{ description: string }];
//   name?: string;
// };

// type WeatherResponse = {
//   main: WeatherDataProps["main"];
//   weather: WeatherDataProps["weather"];
//   name: WeatherDataProps["name"];
// };

// export default function WeatherData() {
//   const [weatherData, setWeatherData] = useState<WeatherDataProps>({
//     main: {},
//     weather: [{ description: "" }],
//   });

//   // state to set city
//   const [city, setCity] = useState<string>("London");

//   useEffect(() => {
//     async function fetchWeather() {
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fde153f3844b17e39f35c5a4dda52b52&units=metric`
//       );
//       const data: WeatherResponse = await res.json();
//       setWeatherData(data);
//       console.log(data);
//       console.log(data.main);
//       console.log(data.weather[0].description);
//     }
//     fetchWeather();
//   }, [city]);

//   // function to handle city change
//   function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setCity(event.target.value);
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="search"
//           placeholder="Please enter a city"
//           autoComplete="off"
//           onChange={handleCityChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {weatherData.name && (
//         <>
//           <h1>{weatherData.name}</h1>
//           {weatherData.main && (
//             <>
//               <p>Temperature: {weatherData.main.temp}</p>
//               <p>Feels like: {weatherData.main.feels_like}</p>
//               <p>Humidity: {weatherData.main.humidity}</p>
//               <p>Min: {weatherData.main.temp_min}</p>
//               <p>Max: {weatherData.main.temp_max}</p>
//               <p>Pressure: {weatherData.main.pressure}</p>
//             </>
//           )}
//           {weatherData.weather[0] && (
//             <p>Description: {weatherData.weather[0].description}</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";

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
  name?: string;
};

type WeatherResponse = {
  main: WeatherDataProps["main"];
  weather: WeatherDataProps["weather"];
  name: WeatherDataProps["name"];
};

export default function WeatherData() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>({
    main: {},
    weather: [{ description: "" }],
  });

  const [city, setCity] = useState<string>("London");
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (ready) {
      const fetchWeather = async () => {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fde153f3844b17e39f35c5a4dda52b52&units=metric`
        );
        const data: WeatherResponse = await res.json();
        setWeatherData(data);
      };

      fetchWeather();
    }
  }, [city, ready]);

  useEffect(() => {
    setReady(true);
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
    setReady(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReady(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Please enter a city"
          autoComplete="off"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData.name && (
        <>
          <h1>{weatherData.name}</h1>
          {weatherData.main && (
            <>
              <p>Temperature: {weatherData.main.temp}</p>
              <p>Feels like: {weatherData.main.feels_like}</p>
              <p>Humidity: {weatherData.main.humidity}</p>
              <p>Min: {weatherData.main.temp_min}</p>
              <p>Max: {weatherData.main.temp_max}</p>
              <p>Pressure: {weatherData.main.pressure}</p>
            </>
          )}
          {weatherData.weather[0] && (
            <p>Description: {weatherData.weather[0].description}</p>
          )}
        </>
      )}
    </div>
  );
}
