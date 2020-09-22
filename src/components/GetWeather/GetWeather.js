import React from 'react';

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
        {temperature && <p>{temperature} ℉</p>}
        {wind && <p>{wind} mph</p>}
        {description && <p> {description}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default GetWeather;
