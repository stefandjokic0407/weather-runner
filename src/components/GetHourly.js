import React, { useState } from 'react';
import './GetHourly.scss';

const GetHourly = (props) => {
    const milliseconds = props.dt
    const dateObject = new Date(milliseconds)
    const humanDateFormant = dateObject.toLocaleString()
    const [index, setIndex] = useState(0)

const next = () => {
if(index < index.hour.length - 1)
    setIndex(index + 1)
}

const previous = () => {
    if(index > 0) {
        setIndex(index - 1)
    }
}
    return (
        <div className='hourly'>
            <p>{humanDateFormant}</p>
            <p>Temperature: {Math.round(props.temp)} ℉</p>
            {/* <p>main:{props.weathermain}</p> */}
            <p>weatherDesc:{props.weatherdescription}</p>
            <img src={`http://openweathermap.org/img/wn/${props.weathericon}@2x.png`}/>
        </div>
    )
}

export default GetHourly;