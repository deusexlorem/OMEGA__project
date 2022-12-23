import {React, useEffect }from "react";
import "./ItemPage.css";
import {useParams, useLoaderData} from 'react-router-dom';
import MovieItem from "./MovieItem";
import TvItem from "./TvItem";
import Recomendation from "./Recomendation";
import axios from "axios";

const ItemLoader = async ({params}) => {

    const id = params.id

    const contentType = params.contentType

    const contentResponse = await axios.get(`https://api.themoviedb.org/3/${contentType}/${id}?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus`)

    contentResponse.data.vote_average = contentResponse.data.vote_average.toFixed(1)

    const content = await contentResponse.data

    let crew =[];

    const crewResponse = await axios.get(`https://api.themoviedb.org/3/${contentType}/${id}/credits?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus`)

    crewResponse.data.crew.map((member) => { 
        if(member.job == 'Director'){  
            crew.push(member)
        }
    })

    crewResponse.data.cast.map((member) => {
        crew.push(member)
    })

    return {content, crew, id}
}

const ItemPage = () => {

    

    const {content, crew, id} = useLoaderData()
    
    const {contentType} = useParams()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'})
      }, [content])

    return(
        <div>
            
            {contentType == 'movie'? 
                <MovieItem content = {content} crew = {crew.filter(person => person.profile_path != null)}/> 
                : 
                <TvItem content = {content} crew = {crew.filter(person => person.profile_path != null)}/>
            }
            <Recomendation content = {content}/>
        </div>
    )
}

export {ItemPage, ItemLoader};
