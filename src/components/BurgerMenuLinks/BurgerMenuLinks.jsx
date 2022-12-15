import React from "react";
import { useNavigate } from 'react-router-dom';
 
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
                    <li onClick = {() => navigateAndClose('/explore')}>Explore</li>
                    <li onClick = {() => navigateAndClose('/create')}>Create</li>
                    <li onClick = {() => navigateAndClose('/connectWallet')}>Connect wallet</li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenuLinks;