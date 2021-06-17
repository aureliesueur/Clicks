
import React from 'react';
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../styles/LoginSignup.scss';
import '../styles/App.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSignInAlt, faUserPlus, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';


function Signup({isLoggedIn, updateConnexion}) {

    const { register, handleSubmit, formState: {errors}} = useForm({nativeValidation: true});

    return (
        <div className="signup">
            <h1 className="signup__title">Pour créer un compte, remplissez ce formulaire</h1>
            <Form>
                <div className="nom">
                    <Form.Group controlId="nom">
                        <Form.Label className="signup__label">Nom</Form.Label>
                        <Form.Control type="text" placeholder="Par exemple Lavigne" />
                    </Form.Group>
                    <Form.Group controlId="prenom">
                        <Form.Label className="signup__label">Prénom</Form.Label>
                        <Form.Control type="text" placeholder="Par exemple Paul" />
                    </Form.Group>
                </div>
                <div className="identifiants">
                    <Form.Group controlId="email">
                        <Form.Label className="signup__label">Email</Form.Label>
                        <Form.Control type="email" placeholder="Par exemple paul.lavigne@sfr.fr" />
                        <Form.Text className="signup__text text-muted">
                        Nous ne communiquerons votre adresse mail à personne.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label className="signup__label">Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Par exemple Bidule75@" />
                        <Form.Text className="signup__text text-muted">
                        Encore moins votre mot de passe !
                        </Form.Text>
                    </Form.Group>
                </div>
    
                <Form.Group controlId="telephone">
                    <Form.Label className="signup__label">Téléphone</Form.Label>
                    <Form.Control type="telephone" placeholder="Par exemple 06 75 67 54 34" />
                </Form.Group>

                <div className="adresse">
                    <Form.Group controlId="adresse">
                        <Form.Label className="signup__label">Adresse</Form.Label>
                        <Form.Control type="text" placeholder="Par exemple 12 rue des Ifs" />
                    </Form.Group>
                    <Form.Group controlId="postal">
                        <Form.Label className="signup__label">Code postal</Form.Label>
                        <Form.Control type="text" placeholder="Par exemple 75009" />
                    </Form.Group>
                    <Form.Group controlId="ville">
                        <Form.Label className="signup__label">Ville</Form.Label>
                        <Form.Control type="text" placeholder="Par exemple Lyon" />
                    </Form.Group>
                </div>

                <Form.Group controlId="origine">
                    <Form.Label className="signup__label">Comment nous avez-vous connus ?</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>Google Search</option>
                    <option>Blog ou presse spécialisée</option>
                    <option>Bouche à oreille</option>
                    <option>Autre</option>
                    </Form.Control>
                </Form.Group>

                <Link to="/" className="signup__link"><Button className="btnClassic signup__btn" type="submit" onClick={() => updateConnexion(true)}>
                    Inscription
                </Button></Link>
            </Form>
        </div>
    );      
}

export default Signup;

