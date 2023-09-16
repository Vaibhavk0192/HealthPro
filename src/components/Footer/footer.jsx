import "./footer.css"
import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footerBlackLine">
                </div>
                <div className="footerMain">
                    <h1>
                        HealthPro
                    </h1>
                    <div className="footerLinks">
                        <ul className="footerList">
                            <li><Link to="/" className="footerListLink">Home</Link></li>
                            <li><Link to="/medicine" className="footerListLink">Seach Medicine</Link></li>
                            <li><Link to="/disease" className="footerListLink">Seach Disease</Link></li>
                            {/* <li><Link to="/profile" className="footerListLink">Profile</Link></li> */}
                            <li><Link to="/PatientDetails" className="footerListLink">About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footerTradeMark">
                    NMLS #1283565—subject to state and federal regulation.
                </div>
                <div className="footerTradeMark">
                    ©PrimaHealth Credit 2023. All rights reserved. Greenlight is a trademark of Primavera Financial, Inc.
                </div>
            </footer>
        </div>
    )
}
