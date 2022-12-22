import React from "react";
import AddButton from "../../icons/AddButton";
import CrewSlider from "../CrewSlider/CrewSlider";
import NonSlider from "../CrewSlider/NonSlider";

const TvItem = (props) => {
    
    const dayjs = require('dayjs')

    let array = [];

    for(let item in props.content.genres){
        
        array.push(props.content.genres[item].name)
        
    }

    return(
       
        <div className="page__container" style = {{backgroundImage:`url(https://image.tmdb.org/t/p/original${props.content.backdrop_path})`}}>
            <div className="gradient">
                <div className="top__part">
                    <div className="item__image">
                        <img src={`https://image.tmdb.org/t/p/original${props.content.poster_path}`} alt="poster" />
                    </div>
                    <div className="item__data">
                        <h1>{props.content.name}<span className="title__span"> ({props.content.original_name})<br/>{props.content.tagline}</span></h1>
                        <p>Дата релиза: <span>{dayjs(props.content.first_air_date).format('DD.MM.YYYY')} </span></p>
                        <p>Рейтинг: <span>{props.content.vote_average}</span></p>
                        <p>Сезоны: <span>{props.content.number_of_seasons}</span></p>
                        <div className="buttons">
                            <button className="watch__button">Смотреть трейлер</button>
                            <AddButton/>
                        </div>
                    </div>
                </div>
                <div className="item__data bottom__part">
                    <h1>Описание</h1>
                    <p><span>{props.content.overview}</span></p> 
                </div>
                <div className="item__data bottom__part">
                    <h1>Жанр</h1>
                    <p>{array.map((item) => {return <span className="genre__span" key = {item}>{item.toLowerCase()}</span>})}</p>
                </div>
                <div className = "item__data bottom__part slider">
                    <h1>Актеры и съемочная группа</h1>
                    {props.crew.length < 5 ? 
                    <div className="crew__section">
                        <NonSlider crew = {props.crew}/>
                    </div>
                    : 
                    <CrewSlider crew = {props.crew}/>}
                </div>
            </div>
        </div>
    )
}

export default TvItem;