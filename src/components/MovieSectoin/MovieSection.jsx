import React from "react";
import './MovieSection.css';
import { useState, useEffect} from "react";
import axios from "axios";
import SectionItem from "../SectionItem/SectionItem";

const MovieSection = () => {
    
    const [movies, setMovies] = useState([ ]);

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus&page=1')
            .then((response) => {
                setMovies(response.data.results);
                   
            })
        }, [])
        
        movies.map((movie ) => {
            const finalPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            movie.poster_path = finalPath;
        })
        
        const moviesShort = movies.slice(10, 20)
    

    return (
        <div className="movie_section__container">
            <h1>Фильмы</h1>
            <div className="movie_section__content">
                {moviesShort.map((movie) => 
                    
                    <SectionItem
                        poster_path = {movie.poster_path}
                        key = {movie.id}
                    />

                )}
            </div>
        </div>
    )
}

export default MovieSection;