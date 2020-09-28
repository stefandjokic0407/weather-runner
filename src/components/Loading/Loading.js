import React, { useEffect, useState } from 'react';
import './Loading.scss';
import Logo from './WR (1).png';

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
    <div className='loadingpage'>
      <img
        className="loading-logo"
        alt="weather-runner-logo"
        src={Logo}
      />
      <div className='loading-text'>
        <h1>Allow us to access your location?</h1>

        <button className='loadingbtn' onClick={getLocation}>Access my Location</button>
        <button className='loadingbtn' onClick={props.no}>Search my Location</button>
     </div>
   </div>
  );
};

export default Loading;

