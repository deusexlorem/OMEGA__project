import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionItem from "../SectionItem/SectionItem";
import NextArrow from "../../icons/nextArrow";
import PrevArrow from "../../icons/prevArrow";
import GetSimilar from "../GetData/GetSimilar";
import { useParams} from 'react-router-dom';



const Recomendation = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };

    const {id} = useParams()
    
    const {contentType} = useParams()
    
    return(
        <div className="recomendation__section">
            <h1>Смотрите также</h1>
            <Slider {...settings}>
            
                {GetSimilar(contentType, id).map((item) => 
                    <SectionItem
                        poster_path = {`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        key = {item.id}
                        id = {item.id}
                        contentType = {contentType}
                    /> 
                )}
    
            </Slider>


        </div>
    )
}

export default Recomendation;
