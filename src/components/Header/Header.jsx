import React from "react";
import {useState} from "react";
import Wallet from "../../icons/wallet";
import BurgerMenu from "../../icons/burgerMenu";
import Logo from "../../icons/logo";
import './Header.css'
import BurgerMenuLinks from "../BurgerMenuLinks/BurgerMenuLinks";
import { useNavigate } from 'react-router-dom';

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
                <Logo/>
                <p>OMEGA</p>
                <p id = 'mobile-logo'>O</p>
            </div>
            <div className="navigation">
                <ul>
                    <li onClick = {() => navigate('/explore')}>Explore</li>
                    <li onClick = {() => navigate('/create')}>Create</li>
                </ul>
            </div>
            <div className="wallet">
                <button id = "wallet-btn" onClick = {() => navigate('/connectWallet')}>Connect wallet</button>
                <Wallet/>
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
