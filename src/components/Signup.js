
import React from 'react';
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
//import '../styles/Signup.scss';
import '../styles/App.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSignInAlt, faUserPlus, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';


function Signup({isLoggedIn, updateConnexion}) {
    useEffect(() => {   
    }, []);
    
    return (
        <div>
        <Form>
            <Form.Group controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Par exemple Lavigne" />
            </Form.Group>

            <Form.Group controlId="prenom">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Par exemple Paul" />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control type="email" placeholder="Par exemple paul.lavigne@sfr.fr" />
                <Form.Text className="text-muted">
                Nous ne communiquerons votre adresse mail à personne.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Par exemple Bidule75@" />
                <Form.Text className="text-muted">
                Encore moins votre mot de passe !
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="telephone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="telephone" placeholder="Par exemple 06 75 67 54 34" />
            </Form.Group>

            <Form.Group controlId="adresse">
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" placeholder="Par exemple 12 rue des Ifs" />
            </Form.Group>

            <Form.Group controlId="codePostal">
                <Form.Label>Code postal</Form.Label>
                <Form.Control type="text" placeholder="Par exemple 75009" />
            </Form.Group>

            <Form.Group controlId="ville">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" placeholder="Par exemple Lyon" />
            </Form.Group>


            <Form.Group controlId="origine">
                <Form.Label>Comment nous avez-vous connus ?</Form.Label>
                <Form.Control as="select" multiple>
                <option>Google Search</option>
                <option>Blog ou presse spécialisée</option>
                <option>Bouche à oreille</option>
                <option>Autre</option>
                </Form.Control>
            </Form.Group>

            <Link to="/"><Button variant="primary" type="submit" onClick={() => updateConnexion(true)}>
                Inscription
            </Button></Link>
        </Form>
    </div>
    );      
}

export default Signup;

