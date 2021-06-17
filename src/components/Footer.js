import React from 'react';
import '../styles/Footer.scss';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  
  return (
    <footer className="footer">
        <ul className="footer__menu">Menu 
            <li>Accueil</li>
            <li>A propos</li>
            <li>Boutique</li>
            <li>Blog</li>
        </ul>
        <img src={logo} alt="logo Clicks" className="footer__logo" />
      
    </footer>
  );
}

export default Footer;
