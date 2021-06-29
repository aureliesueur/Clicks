import React from 'react';
import Diaporama from './Diaporama';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/Accueil.scss';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';

function Accueil() {
  const range = [1, 2, 3, 4, 5];
  const temoignages = [
    {
      auteur: "Lilian Badincourt",
      profession: "Architecte d'intérieur",
      note: 5,
      texte: "Clicks Vintage est une source inépuisable d'inspiration : tous les modèles sont magnifiques, particulièrement bien restaurés, avec un grand souci du détail et de l'authenticité des pièces."
    },
    {
      auteur: "Elodie Kervasdel",
      profession: "Influençeuse",
      note: 4,
      texte: "J'ai acheté plusieurs zooms et appareils chez Clicks Vintage, j'ai toujours été grandement satisfait par leur exigence et la qualité de leurs finitions. Je recommande vivement !"
    }, 
    {
      auteur: "Frédéric Atellian",
      profession: "Avocat",
      note: 5,
      texte: "Clicks Vintage, c'est bien plus qu'un simple magasins d'appareils photo. C'est la poésie de notre jeunesse, toute notre histoire qui défile, sans nostalgie malsaine mais avec l'amour des beaux objets."
    }
  ]

  return (
    <div>
      <div className="diapo">
        <Diaporama />
        <div className="diapo__title">
          <h1 >Bienvenue sur <span>Clicks</span></h1>
          <p>Avis aux fan de l'argentique... Pour compléter votre collection, ou juste pour la déco, craquez pour le look rétro de nos appareils vintage, chinés rien que pour vous, au gré des brocantes.<br/>
          Click click, c'est dans la boite! </p>
          <Link to={"/boutique"}><Button className="btnClassic diapo__btn">Entrez <FontAwesomeIcon icon={faSortDown} className="diapo__icon" /></Button></Link>
        </div>
      </div>

      <div className="avis">
      { temoignages.map(avis => (
          <div className="avis__item">
            <p className="avis__text">{avis.texte}</p> 
            <div className="avis__icon">

              { range.map(level => (
                avis.note >= level ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={faStarEmpty} />
              )) }

            </div>
            <p className="avis__name">{avis.auteur}</p>
            <p className="avis__job">{avis.profession}</p>
          </div>
        )) }
      </div>
    </div>
  );
}

export default Accueil;
