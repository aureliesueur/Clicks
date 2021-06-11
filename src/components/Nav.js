import React from 'react';
import '../styles/Nav.scss';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="menu">
      <img src={logo} alt="logo Clicks" className="menu__logo" />
      <ul className="menu__links">
        <Link to="/" className="menu__link">Accueil</Link>
        <Link to="/apropos" className="menu__link">A propos</Link>
        <Link to="/boutique" className="menu__link">Boutique</Link>
        <Link to="/blog" className="menu__link">Blog</Link>
      </ul>
    </nav>
  );
}

export default Nav;
