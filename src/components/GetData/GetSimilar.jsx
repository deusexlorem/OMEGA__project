import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";

const GetSimilar = (contentType, id) => {

    const [similar, setSimilar] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${contentType}/${id}/similar?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus&page=1`)
            .then((response) =>{
                
                setSimilar(response.data.results);  
            })
            
        }, [])

    return(
        similar.filter(person => person.poster_path != null) 
    )
}

export default GetSimilar;