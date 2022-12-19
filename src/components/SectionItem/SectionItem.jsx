import React from "react";
import './SectionItem.css'
import { useNavigate} from 'react-router-dom';


const SectionItem = (props) =>{
    
    const navigate = useNavigate()

    return (
        <div className="section__item" onClick={() => navigate(`${props.contentType}/${props.id}`)}>
            <img src={props.poster_path} alt="" />
        </div>
    )
}
export default SectionItem;