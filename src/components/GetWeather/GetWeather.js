import React from 'react';
import Clothing from '../Clothing/Clothing';
import './GetWeather.scss';

const GetWeather = ({
  description,
  name,
  city,
  country,
  error,
  temperature,
  wind,
  humidity,
  image,
}) => {
  return (
    <div>
      {city && country && (
        <p>
          {city}, {country}
        </p>
      )}
      <div className="weather">
        <div className="city-box">
        {name && <p>{name}</p>}
        <img className="logo" src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt="" />
        </div>
        <div className="category-box">
        {temperature && <p className="temp">{temperature} ℉ </p>}
        {wind && <p>Wind: {wind} mph</p>}
        {humidity && <p className="humidity">Humidity: {humidity}%</p>}
        {description && <p className="description"> {description}</p>}
        {error && <p>{error}</p>}
        </div>
      </div>
      <Clothing temp={temperature} />
    </div>
  );
};

export default GetWeather;
