import React from "react";
import "./ItemPage.css";
import { useParams} from 'react-router-dom';
import GetItemData from "../GetData/GetItemData";
import GetCrewData from "../GetData/GetCrewData";
import MovieItem from "./MovieItem";
import TvItem from "./TvItem";

const ItemPage = () => {
    const {id} = useParams()
    
    const {contentType} = useParams()

    return(
        <div>
            {contentType == 'movie'? 
                <MovieItem content = {GetItemData(contentType,id)} crew = {GetCrewData(contentType,id)}/> 
                : 
                <TvItem content = {GetItemData(contentType, id)} crew = {GetCrewData(contentType,id)}/>}
        </div>
    )
}

export default ItemPage;
