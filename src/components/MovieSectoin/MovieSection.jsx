import React from "react";
import './MovieSection.css';
import { useState, useEffect} from "react";
import axios from "axios";
import SectionItem from "../SectionItem/SectionItem";
import { trends } from "../TrendsSection/TrendsSection";

const MovieSection = () => {

    const [movies, setMovies] = useState([ ]);
    
    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus&page=1')
            .then((response) => {
                response.data.results.map((movie) =>{
                    if(!movie.poster_path ){
                        response.data.results.splice(response.data.results.indexOf(movie), 1)
                    }
                })
                setMovies(response.data.results);   
            })
        }, [])

        const noRepeat = () =>{
            trends.map((trend) =>{
                movies.map((movie) =>{
                    if(trend.id == movie.id){
                        movies.splice(movies.indexOf(movie), 1)
                    }
                })
            })
        }
        noRepeat()

    const moviesShort = movies.slice(0, 10)

    console.log(moviesShort)
    
    return (
        <div className="movie_section__container">
            <h1>Фильмы</h1>
            <div className="movie_section__content">
                {moviesShort.map((movie) => 
                    
                    <SectionItem
                        poster_path = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        key = {movie.id}
                    />

                )}
            </div>
        </div>
    )
}

export default MovieSection;