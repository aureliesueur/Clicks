import React from 'react';
import {useState} from "react";
import Connexion from './Connexion';
import '../styles/Nav.scss';
import logo from '../assets/logo.png';
//import '../styles/App.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Nav({cart, isLoggedIn, updateConnexion, currentUser, setCurrentUser}) {

  const [isMenuShown, setIsMenuShown] = useState(false);
  const basket = cart.reduce(function(total, item) {
    return total + item.quantity;
  }, 0);
  //console.log(basket);
  return (

    <nav className="col navbar navbar-expand-lg navbar-light menu">
      <img src={logo} alt="logo Clicks" className="navbar-brand img-thumbnail img-fluid menu__logo" />
      <button  onClick={() => setIsMenuShown(!isMenuShown)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav menu__links">
          <li class="nav-item active menu__item"><Link to="/" className="nav-link menu__link" >Accueil</Link></li>
          <li class="nav-item active menu__item"><Link to="/apropos" className="nav-link menu__link" >A propos</Link></li>
          <li class="nav-item active menu__item"><Link to="/boutique" className="nav-link menu__link">Boutique</Link></li>
          <li class="nav-item active menu__item"><Link to="/panier" className="nav-link menu__link basket"><FontAwesomeIcon icon={faShoppingBasket}/><span className="basket__nb">{ basket > 0 ? (basket) : null }</span></Link></li>
          <li class="nav-item active menu__item"><Link to="/blog" className="nav-link menu__link">Blog</Link></li>
        </ul>
      </div>
      <Connexion isLoggedIn={isLoggedIn} updateConnexion={updateConnexion} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      { isMenuShown === true ? (
          <ul className="navbar-nav lateralMenu" onMouseLeave={() => setIsMenuShown(!isMenuShown)}>
           <li class="nav-item active lateralMenu__item"><Link to="/" className="nav-link lateralMenu__link">Accueil</Link></li>
           <li class="nav-item active lateralMenu__item"><Link to="/apropos" className="nav-link lateralMenu__link">A propos</Link></li>
           <li class="nav-item active lateralMenu__item"><Link to="/boutique" className="nav-link lateralMenu__link">Boutique</Link></li>
           <li class="nav-item active lateralMenu__item"><Link to="/panier" className="nav-link lateralMenu__link basket"><FontAwesomeIcon icon={faShoppingBasket}/><span className="basket__nb">{ basket > 0 ? (basket) : null }</span></Link></li>
           <li class="nav-item active lateralMenu__item"><Link to="/blog" className="nav-link lateralMenu__link">Blog</Link></li>
         </ul>
      ) : null }
    </nav>
  );
}

export default Nav;
