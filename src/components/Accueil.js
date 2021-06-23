import React from 'react';
import Diaporama from './Diaporama';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/Accueil.scss';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

function Accueil() {
  return (
    <div className="diapo">
      <div className="diapo__title">
        <h1 >Bienvenue sur <span>Clicks</span></h1>
        <p>Avis aux fan de l'argentique... Pour compléter votre collection, ou juste pour la déco, craquez pour le look rétro de nos appareils vintage, chinés rien que pour vous, au gré des brocantes.<br/>
        Click click, c'est dans la boite! </p>
        <Link to={"/boutique"}><Button className="btnClassic diapo__btn">Entrez <FontAwesomeIcon icon={faSortDown} className="diapo__icon" /></Button></Link>
      </div>
      <Diaporama />
      </div>
  );
}

export default Accueil;
