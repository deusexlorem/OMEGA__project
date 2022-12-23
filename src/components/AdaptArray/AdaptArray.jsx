import React from "react";

const AdaptArray = (array, width) => {
    const desktop = Array.from(array).slice(0, 10)
    const tablet = Array.from(array).slice(0, 8)
    const phoneLarge = Array.from(array).slice(0, 6)
    const phoneSmall = Array.from(array).slice(0, 4)
    
    let arrayShort = desktop;

    if(width < 800 && width > 541){
        arrayShort = tablet;
    } else if (width <= 540 && width > 323){
        arrayShort = phoneLarge;
    } else if (width <= 322 ){
        arrayShort = phoneSmall;
    }

    return (
        arrayShort 
    )
}

export default AdaptArray;