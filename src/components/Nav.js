import React from 'react';
import Connexion from './Connexion';
import { Link } from 'react-router-dom';
//import { useState } from "react";
import '../styles/Nav.scss';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Nav({ cart, isLoggedIn, updateConnexion, currentUser, setCurrentUser }) {

  const basket = cart.reduce(function(total, item) {
    return total + item.quantity;
  }, 0);
  //console.log(basket);
  return (
    <nav className="menu">
      <img src={logo} alt="logo Clicks" className="menu__logo" />
      <ul className="menu__links">
        <Link to="/" className="menu__link">Accueil</Link>
        <Link to="/apropos" className="menu__link">A propos</Link>
        <Link to="/boutique" className="menu__link">Boutique</Link>
        <Link to="/panier" className="menu__link basket"><FontAwesomeIcon icon={faShoppingBasket}/><span className="basket__nb">{ basket > 0 ? (basket) : null }</span></Link>
        <Link to="/blog" className="menu__link">Blog</Link>
      </ul>
      <Connexion isLoggedIn={isLoggedIn} updateConnexion={updateConnexion} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </nav>
  );
}

export default Nav;

