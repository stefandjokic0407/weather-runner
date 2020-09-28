import React from 'react';
import './clothing.scss';

function Clothing(props) {
    const temp = props.temp;
    const main = props.main;
    const image = props.image;
    console.log(props)
    let clothes;
    if(temp === undefined){
        clothes = null;
    } else if(temp > 90 && main === "Clear") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sun and sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/sunglasses.png" alt="Sunglasses" />
                <p>Sunglasses are another great way to keep the sun from your eyes on a run.</p>
            </span>
            <span>
                <img src="/icons/tank-top.png" alt="Tank-Top" />
                <p>On a hot day wearing a tank top can keep you cool while running.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have on hot days. STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp > 90 && main === "Clouds") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sun and sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/tank-top.png" alt="Tank-Top" />
                <p>On a hot day wearing a tank top can keep you cool while running.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have on hot days. STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp > 90 && main === "Rain") {
        return clothes = 
        <div>
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat & rain from your eyes.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Might wanna grab a light rain jacket.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Make sure to wear shorts that will dry quickly.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best pair.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even if it is raining, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp > 90 && main === "Drizzle") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat & rain from your eyes.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Might wanna grab a rain jacket.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are okay for the rain but also consider some track pants.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best pair.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even if it is raining, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp > 90 && main === "Thunderstorm" ) {
        return clothes =
        <div className="clothes-boxes">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>Caution thunderstorm in your area!!</p>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Clear"){
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sun and sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/sunglasses.png" alt="Sunglasses" />
                <p>Sunglasses are another great way to keep the sun from your eyes on a run.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>Micro Fiber shirts are your best bet for a nice day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Of course most important of all, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Rain") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat & rain from your eyes.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Might wanna grab a rain jacket.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are okay for the rain but also consider some track pants.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best pair.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even if it is raining, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Clouds") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt is great for today.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Of course most important of all, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Thunderstorm" ) {
        return clothes =
        <div>
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>Caution thunderstorm in your area!!</p>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Clear") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>Wear a beanie or something to keep your head warm.</p>
            </span>
            <span>
                <img src="/icons/sunglasses.png" alt="Sunglasses" />
                <p>It may be cold but the sun is still out!</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="Hoodie" />
                <p>A hoodie or jacket is recommended.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="Pants" />
                <p>Sweatpants are your best bet for a cold day.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even on cold days its important!! STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Clouds") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>Wear a beanie or something to keep your head warm.</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="Hoodie" />
                <p>A hoodie or jacket is recommended.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="Pants" />
                <p>Sweatpants are your best bet for a cold day.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even on cold days its important!! STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Rain") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>Wear a beanie or something to keep your head warm.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p> Wear a rain jacket over your hoodie to stay warm and dry!</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="Hoodie" />
                <p>A hoodie is highly recommended.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="Pants" />
                <p>Sweatpants are your best bet for a cold day.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even on cold days its important!! STAY HYDRATED!</p>
            </span>
        </div>
    };

    return <div>
        {clothes}
    </div>
}

export default Clothing;
