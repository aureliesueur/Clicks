import React from 'react';
import '../styles/Footer.scss';
import logo2 from '../assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faFax, faMapMarkerAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  
  return (
    <footer className="footer">
        <ul className="footer__menu">Menu 
            <li>Accueil</li>
            <li>A propos</li>
            <li>Boutique</li>
            <li>Blog</li>
        </ul>
        <div className="footer__coordonnees">
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="footer__icon" /> 12, quai de la Mégisserie 75001 Paris</p>
            <p><FontAwesomeIcon icon={faPhoneSquare} className="footer__icon" /> 01 45 68 74 34</p>
            <p><FontAwesomeIcon icon={faFax} className="footer__icon" /> 01 45 68 74 30</p>
            <p><FontAwesomeIcon icon={faEnvelopeSquare} className="footer__icon" /> contact@clicks.vintage.com</p>
        </div>
        <img src={logo2} alt="logo Clicks" className="footer__logo" />
      
    </footer>
  );
}

export default Footer;
