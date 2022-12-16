import React from "react";
import './Footer.css';
import QrCode from "../../icons/qrcode";
import RightArrow from "../../icons/rightarrow";
import { useNavigate } from 'react-router-dom';
import TMDBqrcode from "../../icons/TMDBqrcode";

const Footer = () => {

    const navigate = useNavigate()

    return (
        <div className="footer__container">
            {/* <div className="form">
                    <p>Stay tooned <br/>with OMEGA</p>
                    <div className="form-input">
                        <input type="email" name="email" id="" placeholder="Your email"/>
                        <RightArrow/>
                    </div>
                
            </div> */}
            <div className="footer__navigation">
                <p>OMEGA</p>
                <ul>
                    <li onClick = {() => navigate('/')}>Главная</li>
                    <li onClick = {() => navigate('/explore')}>Тренды</li>
                    <li onClick = {() => navigate('/create')}>Фильмы</li>
                    <li >Сериалы</li>
                </ul>
            </div>
            <div className="creator__reference"> 
                <QrCode/>
                <p className="reference__text">Created by</p>
            </div>
            <div className="tmdb__reference"> 
                <TMDBqrcode/>
                <p className="reference__text">Provided<br/>by TMDB</p>
            </div>
        </div>
    )
}

export default Footer;