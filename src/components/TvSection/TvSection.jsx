import React from "react";
import './TvSection.css';
import { useState, useEffect} from "react";
import axios from "axios";
import SectionItem from "../SectionItem/SectionItem";
import GetTrends from "../GetData/GetTrends";
import AdaptArray from "../AdaptArray/AdaptArray";

const TvSection = (props) => {
    
    const [tv, setTv] = useState([ ]);

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus&page=1')
            .then((response) => {
                response.data.results.map((show) =>{
                    if(!show.poster_path){
                        response.data.results.splice(response.data.results.indexOf(show), 1)
                    }
                })
                setTv(response.data.results);
                
            })  
        }, [])
       
        const noRepeat = () =>{
            GetTrends().map((trend) =>{
                tv.map((show) =>{
                    if(trend.id == show.id){
                        tv.splice(tv.indexOf(show), 1)
                    }
                })
            })
        }
        noRepeat()

    // const tvShort = tv.slice(0, 10)
    
    return (
        <div className="tv_section__container">
            <h1>Сериалы</h1>
            <div className="tv_section__content">
                {AdaptArray(tv, props.width).map((show) => 
                    <SectionItem
                        poster_path = {`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                        key = {show.id}
                        id = {show.id}
                        contentType = {'tv'}
                    />

                )}
            </div>
        </div>
    )
}

export default TvSection;