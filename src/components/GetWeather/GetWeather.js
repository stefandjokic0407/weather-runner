import React from 'react';
import Clothing from '../Clothing/Clothing';
import './GetWeather.scss';

const GetWeather = ({
  description,
  city,
  country,
  error,
  temperature,
  wind,
  humidity,
  image,
  main,
  name,
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
          <img
            src={`http://openweathermap.org/img/wn/${image}@2x.png`}
            alt=""
          />
        </div>
        <div className="category-box">
          {temperature && <p className="temp">Temperature: {temperature} ℉ </p>}
          {wind && <p>Wind: {wind} mph</p>}
          {humidity && <p className="humidity">Humidity: {humidity}%</p>}
          {description && (
            <p className="description">Description: {description}</p>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
      <div className="clothing-box">
        <h1>Clothing For Your Run</h1>
        <Clothing temp={temperature} desc={description} main={main} />
      </div>
    </div>
  );
};

export default GetWeather;
