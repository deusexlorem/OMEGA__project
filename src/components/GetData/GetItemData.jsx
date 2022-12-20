import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";

const GetItemData = (contentType, id) => {

    const [content, setContent] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${contentType}/${id}?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus`)
            .then((response) =>{
                response.data.vote_average = response.data.vote_average.toFixed(1)
                
                setContent(response.data);
   
            })
        }, [])

    return(
        content
       
    )
}

export default GetItemData;