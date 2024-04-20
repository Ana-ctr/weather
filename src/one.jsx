import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState([]);
  
  const [ start, setStart ] = useState([]);
  const [ end, setEnd ] = useState([]);
  const [ lat, setLat ] = useState([]);
  const [ lon, setLon ] = useState([]);



    

  const fetchWeatherData = async () => {
    let Pogoda = await axios({
      method: 'GET',
      url: 'https://meteostat.p.rapidapi.com/point/hourly',
      params: {
        lat: lat,
        lon: lon,
        start: start,
        end: end,

      },
      headers: {
        'X-RapidAPI-Key': 'c56ae70ce9mshf4b75114217280ap10f748jsn51a052634140',
        'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
      }
    })
    console.log(Pogoda);
    if (Pogoda.status == 200) {
      setForecastData(Pogoda.data.data)
    }
  }
 const getLocation =() =>{
   navigator.geolocation.getCurrentPosition ((position) =>{
setLat (position.coords.latitude)
setLon (position.coords.longitude)

  });
   
  }
  // (navigator.geolocation) {  navigator.geolocation.watchPosition(showPosition);
  
 
 useEffect(() => {
getLocation()
}, [])
  return (
    <>

      <input type='date' name="" id="" onChange={(e) => setStart(e.target.value)} />
      <input type='date' name="" id="" onChange={(e) => setEnd(e.target.value)} />



<button onClick={fetchWeatherData}>Click</button>




      <div className="Weather-forecast img">
        <h1>5-Day Weather Forecast</h1>
        <div className="weather-cards">
          <div class="row">
            {forecastData.map((forecast, index) => (

              <div class="col-4 mt-3 col-sm-2"> <WeatherCard key={index} forecast={forecast} /></div>
            ))}</div>
        </div>
      </div>
      </>
  );
};

export default WeatherForecast;