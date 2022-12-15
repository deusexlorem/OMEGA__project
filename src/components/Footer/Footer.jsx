import React from "react";
import './Footer.css';
import QrCode from "../../icons/qrcode";
import RightArrow from "../../icons/rightarrow";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="form">
                    <p>Stay tooned <br/>with OMEGA</p>
                    <div className="form-input">
                        <input type="email" name="email" id="" placeholder="Your email"/>
                        <RightArrow/>
                    </div>
                
            </div>
            <div className="links">
                <ul>
                    <li onClick = {() => navigate('/explore')}>Explore</li>
                    <li onClick = {() => navigate('/create')}>Create</li>
                </ul>
            </div>
            <div className="qr">
                <QrCode/>
                <p>Contact <br/>the creator</p>
            </div>
        </div>
    )
}

export default Footer;