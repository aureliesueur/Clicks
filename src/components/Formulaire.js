import React from 'react';
//import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
//import { Link } from 'react-router-dom';

function Formulaire({cart}) {
    
    const { register, handleSubmit, formState: {errors}} = useForm();

   function submit(data, e) { 
        // Pour empêcher le formulaire d'envoyer les données par défaut sans validation préalable
        e.preventDefault();
        //Récupération des valeurs entrées par l'utilisateur
        let contact = { 
            firstName: data.firstname,
            lastName: data.lastname,
            address: data.address,
            city: data.city,
            email: data.email
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
        <form className="infos__form" onSubmit={handleSubmit((data, e) => { submit(data, e) })}>
            <div className="nom">
                <label htmlFor="firstname">Prénom</label>
                <input {...register("firstname", {required: true, minLength:3})} type="text" placeholder="Par exemple Paul" id="firstname"/>
                {errors.firstname && <p>Vous devez entrer au moins trois lettres !</p>}
                <label htmlFor="lastname">Nom</label>
                <input {...register("lastname", {required: true, minLength:3})} type="text" placeholder="Par exemple Lavigne" id="lastname"/>
                {errors.lastname && <p>Vous devez entrer au moins trois lettres !</p>}
            </div>

            <div className="adresse">
                <label htmlFor="address">Adresse :</label>
                <input {...register("address", {required: true, minLength:3})} type="text" placeholder="Par exemple 12 rue des Ifs" id="address"/>
                {errors.address && <p>Vous devez entrer au moins trois lettres !</p>}
                <label htmlFor="city">Ville :</label>
                <input {...register("city", {required: true, minLength:3, maxLength:20})} type="text" placeholder="Par exemple Lyon" id="city"/>
                {errors.city && <p>Vous devez entrer au moins trois lettres !</p>}
            </div>
                                    
            <label htmlFor="email">Email :</label>
            <input {...register("email", {required: true, minLength:10, maxLength:30, pattern:"(@)(.+)$ "})} type="text" placeholder="Par exemple paul.labiche@sfr.fr" id="email"/>
            {errors.email && <p>Ceci n'est pas une adresse mail !</p>}
            <Button variant="primary" type="submit" >
                Envoyer
            </Button>
        </form> 
    );
}

export default Formulaire;
