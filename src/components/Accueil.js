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
        <h2>Découvrez notre sélection d'appareils photo vintage.</h2>
        <Link to={"/boutique"}><Button className="btnClassic diapo__btn">Entrez <FontAwesomeIcon icon={faSortDown} className="diapo__icon" /></Button></Link>
      </div>
      <Diaporama />
      </div>
  );
}

export default Accueil;
