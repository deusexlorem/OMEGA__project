import React from "react";
import "./NonSlider.css"


const NonSlider = (props) => {

      return (
        <div className="crew__container">
            {props.crew.map((person)=>{
                return (
                    <div className ="crew__item" key = {person.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt="photo" />
                        <span id ="crew__text" >{person.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default NonSlider;