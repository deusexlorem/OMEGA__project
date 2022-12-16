import React from "react";
import './SectionItem.css'


const SectionItem = (props) =>{
    // console.log(props)

    return (
        <div className="section__item">
            <img src={props.poster_path} alt="" />
        </div>
    )
}
export default SectionItem;