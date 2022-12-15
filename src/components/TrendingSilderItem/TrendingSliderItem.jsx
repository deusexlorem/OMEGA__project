import React from "react";
import './TrendingSliderItem.css'


const TrendingSliderItem = (props) =>{
    // console.log(props)

    return (
        <div className="slider-item">
            <img src={props.poster_path} alt="" />
        </div>
    )
}
export default TrendingSliderItem;