import React, { useEffect, useState } from 'react';
import './Loading.scss';

const Loading = (props) => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert('skerp');
    }
  };
  // useEffect(() => {
  //   getLocation()
  // })
  const getCoordinates = (position) => {
    // console.log(position);
    props.yes();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  };

  return (
    <div>
      <img
        className="loading-logo"
        alt="weather-runner-logo"
        src="https://cdn.discordapp.com/attachments/756212437606203542/756284007917944882/runner-logo.jpg"
      />
      <h1>Allow us to access your location?</h1>

      <button onClick={getLocation}>Yes</button>
      <button onClick={props.no}>Search my Location</button>

      {/* /> */}
    </div>
  );
};

export default Loading;
