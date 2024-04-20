
import React from 'react';
import moment from 'moment';
import { TiWeatherSunny, TiWeatherCloudy } from 'react-icons/ti'; // Import colorful weather icons

const WeatherCard = ({ forecast }) => {

  function WeatherCondition(weatherCode) {
    switch (weatherCode) {
      case 1:
        return <TiWeatherSunny />;
      case 2:
        return <TiWeatherCloudy />;
      // Add more cases for other weather conditions
      default:
        return <TiWeatherSunny />; // Default to a sunny icon if weather code is unknown
    }
  }

  return (
    <div className="weather-card">
      <h3>{moment(forecast.date).fromNow()}</h3>
      <div className="weather-info">
        <div className="weather-icon">
          {WeatherCondition(forecast.coco)}
        </div>
        <div className="temperature">
          <h2>{forecast.temp}°C</h2>
          <p>Feels like {forecast.dwpt}°C</p>
        </div>
      </div>
      <div className="additional-info">
        <p><i className="fas fa-wind"></i> {forecast.wspd} km/h</p>
        <p><i className="fas fa-wind"></i> {forecast.wdir}m</p>
        <p><i className="fas fa-tint"></i> {forecast.pres} Pha</p>
      </div>
    </div>
  );
};

export default WeatherCard;