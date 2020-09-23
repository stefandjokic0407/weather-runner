import React from 'react';

function Clothing(props) {
    const temp = props.temp;
    let clothes;
    if(temp === undefined){
        clothes = null;
    } else if(temp > 90) {
        return clothes = 
        <div>
            <img src="/icons/baseball-cap.png" alt="Hat" />
            <img src="/icons/sunglasses.png" alt="Sunglasses" />
            <img src="/icons/tank-top.png" alt="Tank-top" />
            <img src="/icons/shorts.png" alt="Shorts" />
            <img src="/icons/shoes.png" alt="Shoes" />
            <img src="icons/water.png" alt="Water" />
        </div>
    } else if(temp <= 89 && temp >= 60){
        return clothes = 
        <div>
            <img src="/icons/baseball-cap.png" alt="Hat" />
            <img src="/icons/sunglasses.png" alt="Sunglasses" />
            <img src="/icons/shirt.png" alt="Shirt" />
            <img src="/icons/shorts.png" alt="Shorts" />
            <img src="/icons/shoes.png" alt="Shoes" />
            <img src="icons/water.png" alt="Water" />
        </div>
    } else if(temp <=59 && temp >= 32) {
        return clothes = 
        <div>
            <img src="/icons/beanie.png" alt="Beanie" />
            <img src="/icons/hoodie.png" alt="Hoodie" />
            <img src="/icons/pants.png" alt="Pants" />
            <img src="/icons/shoes.png" alt="Shoes" />
            <img src="icons/water.png" alt="Water" />
        </div>
    };
    console.log(props);

    return <div>
        <h1> Clothing For Your Run </h1>
        {clothes}
    </div>
}

export default Clothing;
