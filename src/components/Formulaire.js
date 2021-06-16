import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { useForm } from 'react-hook-form';

function Formulaire({cart}) {
    const [inputLastname, setInputLastname] = useState('');
    const [inputFirstname, setInputFirstname] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputCity, setInputCity] = useState('');
    //const { register } = useForm();

    function handleSubmit(e) { 
        // Pour empêcher le formulaire d'envoyer les données par défaut sans validation préalable
        e.preventDefault();
        //Récupération des valeurs entrées par l'utilisateur
        let contact = { 
            firstName: {inputFirstname}.inputFirstname,
            lastName: {inputLastname}.inputLastname,
            address: {inputAddress}.inputAddress,
            city: {inputCity}.inputCity,
            email: {inputEmail}.inputEmail
        };
        //Récupération des données du panier - id des produits commandés - sous forme de tableau de strings
        let products = cart.map(item => item._id);
        let order = {contact, products};
        console.log(order);
        //Fonction pour envoyer les données du formulaire ainsi que la liste des id des produits commandés via une API fetch POST - fichier queries.js -*/
        sendForm(order);
    } 
    function sendForm(data) {   
        fetch("http://localhost:3000/api/cameras/order", {
               method: "POST",
               headers: {
               "Content-Type": "application/json"
               },
               body: JSON.stringify(data)
               })
               .then(response => response.json())
               .then(response => {
                   console.log(response);
                   storeDataOrder(response); 
               })
               .catch(error => alert("Erreur : " + error));
    }

    function storeDataOrder(data) {
        localStorage.setItem("orderId", data.orderId);
        localStorage.setItem("orderName", data.contact.firstName);
        // Renvoie vers la page de confirmation de commande, avec le prix total mis en mémoire dans le paramètre url
        const totalCart = cart.reduce(function(total, item) {
            return total + item.price * item.quantity / 100;
        }, 0); 
        window.location.href = "/confirmation?price=" + totalCart;
    }

    return (
        <Form className="infos__form">
            <div className="nom">
                <Form.Group controlId="firstName">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Par exemple Paul" value={inputFirstname} onChange={(e) => setInputFirstname(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Par exemple Lavigne" value={inputLastname} onChange={(e) => setInputLastname(e.target.value)} />
                </Form.Group>
            </div>

            <div className="adresse">
                <Form.Group controlId="address">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control type="text" placeholder="Par exemple 12 rue des Ifs" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control type="text" placeholder="Par exemple Lyon" value={inputCity} onChange={(e) => setInputCity(e.target.value)} />
                </Form.Group>
            </div>
                                    
            <Form.Group controlId="email">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control type="email" placeholder="Par exemple paul.lavigne@sfr.fr" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                Nous ne communiquerons votre adresse mail à personne.
                </Form.Text>
            </Form.Group>

            <Link to="/"><Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                Envoyer
            </Button></Link>
        </Form>
    );
}

export default Formulaire;
