import React from 'react';

function Clothing(props) {
    const temp = props.temp;
    console.log(props)

    // function clothDivider(temp){
    //     if(temp === undefined){
    //         return null
    //     } else if( temp >= 90 ){
    //         return <img src="/icons/tank-top.png" alt="Tank-top" />
    //     }
    // }

    return <div>
        {temp === undefined ?
        null
        :
        <img src="/icons/tank-top.png" alt="tank-top"/>
        }
    </div>
}

export default Clothing;