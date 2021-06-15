
import React from 'react';
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
//import '../styles/Connexion.scss';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';


function Connexion({isLoggedIn, updateConnexion}) {
    return (
        <div className="connexion">
        { isLoggedIn ? (
            <div className="connexion__deconnect">
                <Button href="#" className="btnClassic connexion__btn" onClick={() => updateConnexion(false)}><FontAwesomeIcon icon={faSignOutAlt} /> Déconnexion</Button>
                <Button href="#" className="btnClassic connexion__btn"><FontAwesomeIcon icon={faUser} /> Compte</Button>
            </div>
            ) : (
            <div className="connexion__connect">
                 <Link to="/login" className="connexion__link"><Button className="btnClassic connexion__btn"><FontAwesomeIcon icon={faSignInAlt} /> Connexion</Button></Link>
                 <Link to="/signup" className="connexion__link"><Button className="btnClassic connexion__btn"><FontAwesomeIcon icon={faUserPlus} /> Inscription</Button></Link>
            </div>
            )
        }
        </div>
    );      
}

export default Connexion;

