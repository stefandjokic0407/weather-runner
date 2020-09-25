import { findAllByAltText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import GetWeather from '../GetWeather/GetWeather';
import SearchBar from '../SearchBar/SearchBar';

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [isShowing] = useState(true);
  const APIKEY = '2d90cd2ad195805d051c268178b0923d';
  const getLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates)
    } else {
      alert('not supported')
    }
  }
useEffect(() => {
  getLocation()
}, [])
async function getCoordinates(position) {
  // console.log(position);
  // props.yes()
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
 const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`)
 .then((res) => res.json())
 .then(api => {

   setWeather({
     data: api,
     city: api.city,
     country: api.sys.country,
     description: api.weather[0].description,
     image: api.weather[0].icon,
     temperature: Math.round(api.main.temp /* 9 */ /* / 5 - 459.67 */), // Returns temp in F from Kelvin
     wind: Math.round(api.wind.speed),
     humidity: api.main.humidity,
     error: '',
   });

 })
//  .then((data) => data);
// if (latitude && longitude) {
// } else {
//   setWeather({
//     data: '',
  //   city: '',
  //   country: '',
  //   description: '',
  //   image: '',
  //   temperature: '',
  //   wind: '',
  //   humidity: '',
  //   error: alert('Please turn on location'),
  // });
// }
}


  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        image: apiData.weather[0].icon,
        temperature: Math.round(apiData.main.temp /* 9 */ /* / 5 - 459.67 */), // Returns temp in F from Kelvin
        wind: Math.round(apiData.wind.speed),
        humidity: apiData.main.humidity,
        error: '',
      });
    } else {
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        image: '',
        temperature: '',
        wind: '',
        humidity: '',
        error: alert('Please Type A City And Country'),
      });
    }
  }


  return (
    <div className="App">
      <h3>Please Enter City and Country</h3>
      <SearchBar getWeather={fetchData} />
      {isShowing ? 
        <GetWeather
        city={weather.city}
        country={weather.country}
        description={weather.description}
        image={weather.image}
        temperature={weather.temperature}
        wind={weather.wind}
        humidity={weather.humidity}
        error={weather.error}
        />
      : 
        null
      }
      {console.log(weather.data)}
    </div>
  );
};

export default Weather;
