import React, { Component } from 'react';
import Shirt from './icons/shirt.png';
import Shorts from './icons/shorts.png';
import Shoes from './icons/shoes.png';
import Sunglasses from './icons/sunglasses.png';
import Water from './icons/water.png';

class Clothing extends Component {
    render() {
        return <div className='clothing-box'>
            <div>
                <img src={Shirt} alt="Shirt" />
            </div>
            <div>
                <img src={Sunglasses} alt="Sunglasses" />
            </div>
            <div>
                <img src={Shorts} alt="Shorts" />
            </div>
            <div>
                <img src={Shoes} alt="Shoes" />
            </div>
            <div>
                <img src={Water} alt="Water" />
            </div>
        </div>
    }
}

export default Clothing;