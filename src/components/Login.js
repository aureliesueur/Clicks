
import React from 'react';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
//import '../styles/Login.scss';
import '../styles/App.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSignInAlt, faUserPlus, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';


function Login({ isLoggedIn, updateConnexion }) {

    return (
        <div>
            <Form>
                <Form.Group controlId="email">
                    <Form.Label>Adresse mail</Form.Label>
                    <Form.Control type="email" placeholder="Entrez votre email" />
                    <Form.Text className="text-muted">
                    Nous ne communiquerons votre adresse mail à personne.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Entrez votre mot de passe" />
                    <Form.Text className="text-muted">
                    Encore moins votre mot de passe !
                    </Form.Text>
                </Form.Group>

                <Link to="/"><Button variant="primary" type="submit" onClick={() => updateConnexion(true)}>
                    Connexion
                </Button></Link>
            </Form>
        </div>
    );      
}

export default Login;

