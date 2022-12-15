import React from "react";
import './StaticItem.css'


const StaticItem = (props) =>{
    // console.log(props)

    return (
        <div className="static_item">
            <img src={props.poster_path} alt="" />
        </div>
    )
}
export default StaticItem;
