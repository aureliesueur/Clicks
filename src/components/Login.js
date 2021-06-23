
import React from 'react';
import { users } from '../datas/users'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import '../styles/LoginSignup.scss';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';


function Login({ isLoggedIn, updateConnexion, currentUser, setCurrentUser }) {
    const [inputMail, setInputMail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [isEmailKnown, setIsEmailKnown] = useState(true);
    const [isPasswordOk, setPasswordOk] = useState(true);
    const [message, updateMessage] = useState(0);

    function checkMail () {
        const arrayEmails = users.map(user => user.EmailAddress);
        arrayEmails.includes(inputMail) ? setIsEmailKnown(true) : setIsEmailKnown(false);
    }

    function checkPassword () {
        const filteredUsers = users.filter(user => user.EmailAddress === inputMail);
        setCurrentUser(filteredUsers[0]);
        if (currentUser) {
            console.log(currentUser);
            currentUser.Password === inputPassword ? setPasswordOk(true) : setPasswordOk(false);
        } 
    }

    function submit(e) {
        e.preventDefault();
        console.log(isEmailKnown);
        console.log(isPasswordOk);
        if (isEmailKnown === true && isPasswordOk === true) {
            updateConnexion(true); 
            localStorage.setItem('login', true);
            localStorage.setItem("user", JSON.stringify(currentUser));
            updateMessage(1);
        } else {
            updateConnexion(false);
        }
    }

    return (
        <div className="login">
            <h1 className="login__title">Pour vous connecter, entrez vos identifiants</h1>
            <Form>
                <Form.Group controlId="email">
                    <Form.Label className="login__label">Email</Form.Label>
                    <Form.Control type="email" placeholder="Entrez votre email" value={inputMail} onChange={(e) => setInputMail(e.target.value)} onBlur={() => checkMail()}/>
                    <Form.Text className="text-muted login__text">
                    Nous ne communiquerons votre adresse mail à personne.
                    </Form.Text>
                    {isEmailKnown === false && <p className="login__msg">Cet email n'existe pas dans notre base de données...</p>}
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label className="login__label">Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Entrez votre mot de passe" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} onBlur={() => checkPassword()}/>
                    <Form.Text className="text-muted login__text">
                    Encore moins votre mot de passe !
                    </Form.Text>
                    {isPasswordOk === false && <p className="login__msg">Ce mot de passe est invalide...</p>}
                </Form.Group>

                <Button className="btnClassic login__btn" onClick={(e) => submit(e)}>Connexion</Button>
                {message === 1 && isLoggedIn === true &&
                    <div className="login__welcome welcome">
                        <Link to="/" className="login__link welcome__link"><FontAwesomeIcon icon={faTimes} className="welcome__close" onClick={() => updateMessage(0)} /></Link>
                        <p className="welcome__text">Bonjour {currentUser.FirstName}, très heureux de vous retrouver parmi nous !</p>
                        <Link to="/" className="login__link welcome__link"><Button className="btnClassic welcome__btn">Découvrir Clicks</Button></Link>  
                    </div>}
            </Form>
        </div>
    );      
}

export default Login;

