import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./CrewSlider.css"

const CrewSlider = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
      };

    return(
        <Slider {...settings}>
            {props.crew.map((person)=>{
                return (
                    <div className ="slider__item" key = {person.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt="photo" />
                        <span id ="slider__text" >{person.name}</span>
                    </div>
                    )
                }
            )}
        </Slider>
    )
}

export default CrewSlider;