import React from "react";
import { useNavigate } from 'react-router-dom';
import './BurgerMenuLinks.css'
 
const BurgerMenuLinks = (props) => {

    const navigate = useNavigate();

    const navigateAndClose = (e) => {
        
        navigate(e)
        
        const sing = ['click'];

        props.check(sing);
    }

    return (
        <div className="mobile-content">
            <div className="side-menu">
                <ul>
                    <li onClick = {() => navigateAndClose('/explore')}>Тренды</li>
                    <li onClick = {() => navigateAndClose('/create')}>Фильмы</li>
                    <li onClick = {() => navigateAndClose('/connectWallet')}>Сериалы</li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenuLinks;