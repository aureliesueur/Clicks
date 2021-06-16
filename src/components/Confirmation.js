import React, { useEffect, useState } from 'react';
import '../styles/Confirmation.scss';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Confirmation() {
    useEffect(() => {
        getTotalPrice();
    }, []);
    const [price, updatePrice] = useState(0);
    const orderName = localStorage.getItem("orderName");
    const orderId = localStorage.getItem("orderId");
    function getTotalPrice() {   
        let url = new URL(window.location.href);
        let price = url.searchParams.get("price");
        updatePrice(price);
    }

    return (
        <div className="confirmation">
            <h1 className="confirmation__title"><FontAwesomeIcon icon={faCheck} /> Merci pour votre commande, {orderName} !</h1>
            <p>Vous recevrez un mail de confirmation dans quelques instants.</p>
            <h2 className="confirmation__subtitle">Votre numéro de commande est :<br/>{orderId}</h2>
            <h3 className="confirmation__subtitle">Vous avez réglé un montant total de : <span>{price} €</span></h3>
        </div>
    );
}

export default Confirmation;
