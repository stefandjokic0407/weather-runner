import React from 'react';
import Clothing from '../Clothing/Clothing';

const GetWeather = ({
  description,
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
        <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt="" />
        {temperature && <p className="temp">{temperature} ℉ </p>}
        {wind && <p>Wind: {wind} mph</p>}
        {humidity && <p className="humidity">Humidity: {humidity}%</p>}
        {description && <p className="description"> {description}</p>}
        {error && <p>{error}</p>}
      </div>
      <Clothing temp={temperature} />
    </div>
  );
};

export default GetWeather;
