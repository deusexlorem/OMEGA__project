import React from "react";
import "./ItemPage.css";
import { useParams} from 'react-router-dom';
import { useState, useEffect} from "react";
import axios from "axios";

const ItemPage = () => {
    const {id} = useParams()
    
    const {contentType} = useParams()

    const [content, setContent] = useState({title:'',});


    useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${contentType}/${id}?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus`)
        .then((response) =>{
            
                if(contentType === 'tv') {
                    console.log(response.data)
                    setContent({
                        title: response.data.name, 
                        poster_path:response.data.poster_path,
                        original_title: response.data.original_name,
                        release_date: response.data.first_air_date,

                    })
                    
                } else {
                    setContent(response.data)
                    
                }
                
        })
    }, [])

console.log(content)

const dayjs = require('dayjs')
    
    return(

        <div className="page__container">
            <div className="item__image">
                <img src={`https://image.tmdb.org/t/p/w500${content.poster_path}`} alt="poster" />
            </div>
            <div className="item__data">
                <h1>{content.title}<span> ({content.original_title})</span></h1>
                <p>Дата релиза: {dayjs(content.release_date).format('DD.MM.YYYY')} </p>
            </div>
            
        </div>
    )
}

export default ItemPage;
