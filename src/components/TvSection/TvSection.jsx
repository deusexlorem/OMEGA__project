import React from "react";
import './TvSection.css';
import { useState, useEffect} from "react";
import axios from "axios";
import SectionItem from "../SectionItem/SectionItem";

const TvSection = () => {
    
    const [tv, setTv] = useState([ ]);

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus&page=1')
            .then((response) => {
                setTv(response.data.results);
                   
            })
        }, [])
        
        tv.map((show ) => {
            const finalPath = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
            show.poster_path = finalPath;
        })
        
        const tvShort = tv.slice(2, 12)
    

    return (
        <div className="tv_section__container">
            <h1>Сериалы</h1>
            <div className="tv_section__content">
                {tvShort.map((show) => 
                    
                    <SectionItem
                        poster_path = {show.poster_path}
                        key = {show.id}
                    />

                )}
            </div>
        </div>
    )
}

export default TvSection;