import React from "react";
import './DailyOffer.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect} from "react";
import TrendingSliderItem from "../TrendingSilderItem/TrendingSliderItem";


const DailyOffer = ( ) => {

    const [trends, setTrends ] = useState([]);
    
    useEffect(() => {

    axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus')
        .then((response) => {
            setTrends(response.data.results);    
        })
    }, [])
    
    trends.map((trend ) => {
        const finalPath = `https://image.tmdb.org/t/p/w500${trend.poster_path}`;
        trend.poster_path = finalPath;
    })
     
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
      
    return (

        <div className="daily-offer">
            <h1>Сейчас в тренде</h1>
            <Slider {...settings}>

                {trends.map((trend ) => 
                
                    <TrendingSliderItem
                        poster_path = {trend.poster_path}
                        key = {trend.id}
                    />

                )}
                
            </Slider>
        </div>

    )
}

export default DailyOffer;