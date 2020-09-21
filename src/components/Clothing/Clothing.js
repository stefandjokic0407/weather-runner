import React, { Component } from 'react';
import Shirt from './icons/shirt.png';
import Shorts from './icons/shorts.png';

class Clothing extends Component {
    render() {
        return <div>
            <img src={Shirt} alt="Shirt" />
            <img src={Shorts} alt="Shorts" />
        </div>
    }
}

export default Clothing;