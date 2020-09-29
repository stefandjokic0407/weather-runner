import { findAllByAltText } from '@testing-library/react';
import './Weather.scss';
import React, { useEffect, useState } from 'react';
import GetWeather from '../GetWeather/GetWeather';
import SearchBar from '../SearchBar/SearchBar';
import GetHourly from '../GetHourly';

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [isShowing] = useState(true);
  const [index, setIndex] = useState(1)
  const APIKEY = '2d90cd2ad195805d051c268178b0923d';
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert('not supported');
    }
  };

  
useEffect(() => {
  getLocation()
}, [])
async function getCoordinates(position) {
  // console.log(position);
  // props.yes()
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
 const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKEY}`)
 .then((res) => res.json())
 .then(api => {

   setWeather({
     data: api,
     name: api.name,
     city: api.city,
     country: api.sys.country,
     description: api.weather[0].description,
     main: api.weather[0].main,
     image: api.weather[0].icon,
     temperature: Math.round(api.main.temp /* 9 */ /* / 5 - 459.67 */), // Returns temp in F from Kelvin
     wind: Math.round(api.wind.speed),
     humidity: api.main.humidity,
     error: '',
   });

 })
//  .then((data) => data);
if (latitude && longitude) {
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
    error: alert('Please turn on location'),
  });
}
const hourlyApi = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily&units=imperial&appid=${APIKEY}`)
.then((res) => res.json())
.then(hourlyApi => {
  setHourly(
    hourlyApi.hourly)
})
}
const mappedHourly = hourly.map(hour => {
  return <GetHourly
  dt={hour.dt * 1000}
  temp={hour.temp}
  weathermain={hour.weather[0].main}
  weatherdescription={hour.weather[0].description}
  weathericon={hour.weather[0].icon}
  />
})
const splicedHourly = mappedHourly.splice(0, mappedHourly.length - 23)

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
        name: apiData.name,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        main: apiData.weather[0].main,
        image: apiData.weather[0].icon,
        temperature: Math.round(apiData.main.temp),
        wind: Math.round(apiData.wind.speed),
        humidity: apiData.main.humidity,

        error: '',
      });
    } else {
      setWeather({
        data: '',
        name: '',
        city: '',
        country: '',
        description: '',
        image: '',
        main: '',
        temperature: '',
        wind: '',
        humidity: '',
        error: alert('Please Type A City And Country'),
      });
    }
    const latitude = apiData.coord.lat
    const longitude = apiData.coord.lon
    const searchHourlyApi = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily&units=imperial&appid=${APIKEY}`)
.then((res) => res.json())
.then(searchHourlyApi => {
  setHourly(
    searchHourlyApi.hourly)
})
  }
// const mappedHourly = hourly.map(hour => {
//   return <GetHourly
//   dt={hour.dt * 1000}
//   temp={hour.temp}
//   weathermain={hour.weather[0].main}
//   weatherdescription={hour.weather[0].description}
//   weathericon={hour.weather[0].icon}
  // />
// })
  // const splicedHourly = mappedHourly.splice(0, mappedHourly.length - 23)


  const next = () => {
    if(index < 4) {
    setIndex(index + 1)
    }
  }
    
  const previous = () => {
   if(index > 1){ 
     setIndex(index - 1)
    } }
   
    const firstSplicedHourly = splicedHourly.splice(0, 6)
    const secondSplicedHourly = splicedHourly.splice(0, 6)
    const thirdSplicedHourly = splicedHourly.splice(0, 6)
    const FourthSplicedHourly = splicedHourly.splice(0, 6)
    const fsdgs = () => {
      if(index <= 1) {
        return firstSplicedHourly
      } else if(index <= 2) {
        return secondSplicedHourly
      } else if(index <= 3) {
        return thirdSplicedHourly
      } else {
        return FourthSplicedHourly

      }
 }

  return (
    <div className="App">
      <h3>Please Enter City and Country</h3>
      <SearchBar getWeather={fetchData} />
      {isShowing ? (
        <div>
          <div className='hourlycontainer'>
        {fsdgs()}
        </div>

        <div className='hourlybtncontainer'>

        <button className='hourlybtn' onClick={previous}>previous</button>
        <button className='hourlybtn' onClick={next}>Next</button>
        </div>

        <GetWeather
        name={weather.name}
        city={weather.city}
        country={weather.country}
        description={weather.description}
        image={weather.image}
        temperature={weather.temperature}
        wind={weather.wind}
        humidity={weather.humidity}
        error={weather.error}
        main={weather.main}
        />
        {/* {mappedHourly} */}
        {/* {splicedHourly[0]}{splicedHourly[1]} {splicedHourly[2]}{splicedHourly[3]}{splicedHourly[4]}{splicedHourly[5]} */}
        <div className='hourlycontainer'>
        {fsdgs()}
        </div>

        <div className='hourlybtncontainer'>

        <button className='hourlybtn' onClick={previous}>previous</button>
        <button className='hourlybtn' onClick={next}>Next</button>
        </div>
        </div>
        ) : null}
      {console.log('weather', weather.data)}
      {/* {console.log('HOURLY', mappedHourly)} */}
    </div>
  );
};

export default Weather;
