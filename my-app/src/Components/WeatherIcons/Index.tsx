// import ReactAnimatedWeather from "react-animated-weather";

// const defaults = {
//   icon: "CLEAR_DAY",
//   color: "goldenrod",
//   size: 512,
//   animate: true,
// };

// const WeatherIcons = () => (
//   <ReactAnimatedWeather
//     icon={defaults.icon}
//     color={defaults.color}
//     size={defaults.size}
//     animate={defaults.animate}
//   />
// );

// export default WeatherIcons;

import ReactAnimatedWeather from "react-animated-weather";

type WeatherIconsProps = {
  icon: string;
};

const weatherIcons: { [key: string]: string } = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "CLOUDY",
  "03n": "CLOUDY",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "THUNDER_SHOWERS",
  "11n": "THUNDER_SHOWERS",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};

const WeatherIcons: React.FC<WeatherIconsProps> = ({ icon }) => {
  const weatherCode = weatherIcons[icon] || "CLEAR_DAY"; // Default to "CLEAR_DAY" if no matching icon found
  let iconColor = "black"; // Default color

  if (icon === "01d" || icon === "02d" || icon === "03d" || icon === "04d") {
    iconColor = "goldenrod"; // Set color for daytime icons
  } else if (
    icon === "01n" ||
    icon === "02n" ||
    icon === "03n" ||
    icon === "04n"
  ) {
    iconColor = "darkblue"; // Set color for nighttime icons
  }



  return (
    <ReactAnimatedWeather
      icon={weatherCode}
      color={iconColor}
      size={48}
      animate={true}
    />
  );
};

export default WeatherIcons;
