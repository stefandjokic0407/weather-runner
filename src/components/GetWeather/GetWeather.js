import React from 'react';

const GetWeather = ({ description, city, country, error, temperature, wind, image}) => {
  return (
    <div>
      {city && country && (
        <p>
          {city}, {country}
        </p>
      )}
      <div className="weather">
      <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
      {temperature && <p className="temp">{temperature} ℉ </p>}
      {wind && <p>Wind: {wind} mph</p>}
      {description && <p className="description"> {description}</p>}
      {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default GetWeather;