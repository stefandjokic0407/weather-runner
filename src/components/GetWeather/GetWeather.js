import React from 'react';
import Shirt from './icons/shirt.png';

const GetWeather = ({
  description,
  city,
  country,
  error,
  temperature,
  wind,
}) => {
  return (
    <div>
      {city && country && (
        <p>
          {city}, {country}
        </p>
      )}
      <div className="weather">
        {temperature && (
          <p>
            {temperature} ℉ <img src={Shirt} alt="Shirt" />
          </p>
        )}
        {wind && <p>{wind} mph</p>}
        {description && <p> {description}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default GetWeather;
