import React from "react";
import {useState} from "react";
import BurgerMenu from "../../icons/burgerMenu";
import './Header.css'
import BurgerMenuLinks from "../BurgerMenuLinks/BurgerMenuLinks";
import { useNavigate } from 'react-router-dom';
import LogoNew from "../../icons/logoNew";

const Header = () => {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    const CheckClick = (sing) => {
        if (sing){
            setOpen(false)
        }
    } 
    
    return (
    <div className="header__container">
        <div className="header">
            <div className="logo" onClick = {() => navigate('/')}>
                <LogoNew/>
                <p>OMEGA</p>
                <p id = 'mobile__logo'>O</p>
            </div>
            <div className="navigation">
                <ul>
                    <li onClick = {() => navigate('/explore')}>Тренды</li>
                    <li onClick = {() => navigate('/create')}>Фильмы</li>
                    <li >Сериалы</li>
                </ul>
            </div>
            <div className="wallet">
                <button id = "wallet__button" onClick = {() => navigate('/connectWallet')}>Зарегистрироваться</button>
                <p id = "enter__button">Войти</p>
            </div>
            <div className="mobile-navigation">
                <div className="mobile-trigger" onClick = {() => setOpen(!open)}>
                    <BurgerMenu/> 
                </div>
            </div>
        </div>
        {open && <BurgerMenuLinks check = {CheckClick}/>}
    </div>
    )
}

export default Header;    
