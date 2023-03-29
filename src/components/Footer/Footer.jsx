import React from 'react';
import './Footer.css';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedIn from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';


const Footer = () => {
  return (
    <>
        <div className="Footer_container">
            <hr />
            <div className="footer">
            <div className="social-links">
                <img src={github} alt="Github" />
                <img src={instagram} alt="Instagram" />
                <img src={linkedIn} alt="LinkedIn" />
            </div>
            
            <div className="logo-f">
                <img src={logo} alt="Logo" />
            </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
            
        </div>
    </>
  )
}

export default Footer;
