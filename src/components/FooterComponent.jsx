import React from 'react';
import ghLogo from '../assets/github-logo.JPG';
import Style from '../styles/Footer.module.css';

const Footer = () => {
    return (
        
        <footer className={Style.Footer}>
                <img
                    src={ghLogo}
                    className={Style.ghLogo}
                    alt="github-logo"
                />
                <a
                    href="https://github.com/anapaulaoliva/Conways_Game_of_Life"
                    target="_blank"
                    alt="source-code"
                > 
                source code
                </a>
        </footer>
    );
}

export default Footer;
