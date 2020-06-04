import React from 'react';
import ghLogo from '../assets/github-logo.JPG';
import FooterStyle from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={FooterStyle.Footer}>
                <img
                    src={ghLogo}
                    className={FooterStyle.ghLogo}
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
