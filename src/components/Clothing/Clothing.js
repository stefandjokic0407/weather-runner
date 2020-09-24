import React from 'react';
import './clothing.css';

function Clothing(props) {
    const temp = props.temp;
    console.log(props)
    let clothes;
    if(temp === undefined){
        clothes = null;
    } else if(temp > 90) {
        return clothes = 
        <div>
            <span>
                <img src="/icons/baseball-cap.png" alt="Hat" />
            </span>
            <span>
                <img src="/icons/sunglasses.png" alt="Sunglasses" />
            </span>
            <span>
                <img src="/icons/tank-top.png" alt="Tank-top" />
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
            </span>
        </div>
    } else if(temp <= 89 && temp >= 60){
        return clothes = 
        <div>
            <span className="hat">
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sun and sweat from your eyes.</p>
            </span>
            <span className="sunglasses">
                <img src="/icons/sunglasses.png" alt="Sunglasses" />
                <p>Sunglasses are another great way to keep the sun from your eyes on a run.</p>
            </span>
            <span className="shirt">
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>Micro Fiber shirts are your best bet for a nice day.</p>
            </span>
            <span className="shorts">
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span className="shoes">
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span className="water">
                <img src="icons/water.png" alt="Water" />
                <p>Of course most important of all, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <=59 && temp >= 0) {
        return clothes = 
        <div>
            <img src="/icons/beanie.png" alt="Beanie" />
            <img src="/icons/hoodie.png" alt="Hoodie" />
            <img src="/icons/pants.png" alt="Pants" />
            <img src="/icons/shoes.png" alt="Shoes" />
            <img src="icons/water.png" alt="Water" />
        </div>
    };

    return <div>
        <h1> Clothing For Your Run </h1>
        {clothes}
    </div>
}

export default Clothing;
