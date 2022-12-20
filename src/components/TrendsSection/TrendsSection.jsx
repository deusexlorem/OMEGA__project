import React from "react";
import './TrendsSection.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionItem from "../SectionItem/SectionItem";
import NextArrow from "../../icons/nextArrow";
import PrevArrow from "../../icons/prevArrow";
import GetTrends from "../GetData/GetTrends";


const TrendsSection = ( ) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };
      
    return (

        <div className="trends__container">
            <h1>Сейчас в тренде</h1>
            <Slider {...settings}>
            
                {GetTrends().map((trend ) => 
                    <SectionItem
                        poster_path = {`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                        key = {trend.id}
                        id = {trend.id}
                        contentType = {trend.media_type}
                    /> 
                )}
    
            </Slider>
        </div>

    )
}

export default TrendsSection;

