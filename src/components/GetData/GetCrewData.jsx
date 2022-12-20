import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";

const GetCrewData = (contentType, id) => {

    const [crew, setCrew] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${contentType}/${id}/credits?api_key=278614fd29fc7dd097dff30467b15133&language=ru-Rus`)
            .then((response) =>{
                response.data.crew.map((member) => { 
                    if(member.job == 'Director'){
                        // console.log(member.job)
                        setCrew([member])
                    }
                    
                })
                response.data.cast.map((member) => {
                    setCrew(crew =>[...crew, member])
                })
            })
            
        }, [])

       
        // console.log(crew)
    return(
        crew
       
    )
}

export default GetCrewData;