import React, { useState } from 'react';
import './Loading.css';

const Loading = (props) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // const [loading, setLoading] = useState(false)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const getCoordinates = (position) => {
    // console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  // const r

  return (
    <div>
      <h1>{longitude}</h1>
      <h1>{latitude}</h1>
      <img
        className="loading-logo"
        alt="weather-runner-logo"
        src="https://cdn.discordapp.com/attachments/756212437606203542/756284007917944882/runner-logo.jpg"
      />
      <h1>Allow us to access your location?</h1>
      <button onClick={getLocation}>Get</button>
      <button onClick={props.yes}>Yes</button>
      <button onClick={props.no}>No</button>
    </div>
  );
};

export default Loading;
