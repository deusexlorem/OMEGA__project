import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";

const GetTrends = ( ) => {

    const [trends, setTrends] = useState([ ]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus')
    .then((response) => {
        response.data.results.map((trend) =>{
            if(!trend.poster_path){
                response.data.results.splice(response.data.results.indexOf(trend), 1)
            } 

            setTrends(response.data.results);  
        })
    })

    }, [])

    return(
        trends
    )
}

export default GetTrends;