import React from "react";
import logo from './menuschedulericon 1.png'
import logoTitle from './menuschedulertitle 1.png'
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <span>
                <img src={logo} alt='Logo' className="img" />
                <img src={logoTitle} alt='Logo' className="img" />
            </span>
            <button className="btn">Adjust Allergy Preferences</button>

        </div>
    )
}

export default Header;