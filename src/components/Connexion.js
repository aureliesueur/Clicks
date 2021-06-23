
import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/Connexion.scss';
//import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faSignOutAlt, faUser, faTimes} from '@fortawesome/free-solid-svg-icons';


function Connexion({isLoggedIn, updateConnexion, currentUser, setCurrentUser}) {

    const [isAccountShown, setIsAccountShown] = useState(false);
    function disconnect() {
        updateConnexion(false);
        setCurrentUser({ });
        localStorage.clear();
    }
    return (
        <div className="connexion">
        { isLoggedIn ? (
            <div className="connexion__deconnect">
                <Button className="connexion__btn" onClick={disconnect}><FontAwesomeIcon icon={faSignOutAlt} /> Déconnexion</Button>
                <Button className="connexion__btn" onClick={() => setIsAccountShown(!isAccountShown)}><FontAwesomeIcon icon={faUser} /> Compte</Button>
                { (isAccountShown === true) ? (
                    <div className="connexion__infos">
                        <FontAwesomeIcon icon={faTimes} className="connexion__close" onClick={() => setIsAccountShown(!isAccountShown)} />
                        <p><span>Prénom:</span> {currentUser.FirstName}</p>
                        <p><span>Nom:</span> {currentUser.LastName}</p>
                        <p><span>Email:</span> {currentUser.EmailAddress}</p>
                        <p><span>Adresse:</span> {currentUser.Address}, {currentUser.PostCode} {currentUser.City}</p>
                        <p><span>Téléphone:</span> {currentUser.Phone}</p>
                    </div>
                ) : null }
            </div>
            ) : (
            <div className="connexion__connect">
                 <Link to="/login" className="connexion__link"><Button className="connexion__btn"><FontAwesomeIcon icon={faSignInAlt} /> Connexion</Button></Link>
                 <Link to="/signup" className="connexion__link"><Button className="connexion__btn"><FontAwesomeIcon icon={faUserPlus} /> Inscription</Button></Link>
            </div>
            )
        }
        </div>
    );      
}

export default Connexion;

