
import React from 'react';
import {useEffect} from "react";
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/Cart.scss';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Cart({cart, updateCart}) {
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    const message = cart.length > 0 ? (null) : (<div className="cart__message">Votre panier est vide</div>);
    const totalAmount = cart.reduce(function(total, item) {
        return total + item.price * item.quantity / 100;
    }, 0);
    function emptyCart() {
        updateCart([]);
    }
    function suppressFromCart(name) {
        const filteredCart = cart.filter(camera => camera.name !== name)
        updateCart([...filteredCart]);
    }
    function raiseQuantity(imageUrl, name, price) {
        const cameraToAdd = cart.find((camera) => camera.name === name);
        const cartWithout = cart.filter((camera) => camera.name !== name);
        updateCart([...cartWithout, {imageUrl, name, price, quantity: cameraToAdd.quantity + 1}]);
    }
    function lowerQuantity(imageUrl, name, price) {
        const cameraToAdd = cart.find((camera) => camera.name === name);
        const cartWithout = cart.filter((camera) => camera.name !== name);
        if(cameraToAdd.quantity <= 1) {
            suppressFromCart(cameraToAdd.name);
        } else {
            updateCart([...cartWithout, {imageUrl, name, price, quantity: cameraToAdd.quantity - 1}]);
        }
    }
    return (
        <div className="cart">
            <h1 className="cart__title">Votre panier :</h1>
            <div className="cart__list">
                {cart.map(cartItem => (
                    <div key={cartItem.name.toUpperCase()} className="cart__item">
                        <img src={cartItem.imageUrl} alt={`Photo de ${cartItem.name}`} className="cart__img" />
                        <div className="cart__box">
                            <h2>{cartItem.name}</h2>
                            <p>Prix unitaire: {cartItem.price / 100} €</p>
                            <div className="cart__options">
                                <Button href="#" variant="primary" className="btnClassic" onClick={() => lowerQuantity(cartItem.imageUrl,cartItem.name, cartItem.price)}><FontAwesomeIcon icon={faMinus} /></Button>
                                {cartItem.quantity}
                                <Button href="#" variant="primary" className="btnClassic" onClick={() => raiseQuantity(cartItem.imageUrl,cartItem.name, cartItem.price)}><FontAwesomeIcon icon={faPlus} /></Button>
                            </div>
                            <div className="cart__suppressItem">
                                <Button href="#" variant="primary" className="btnClassic" onClick={() => suppressFromCart(cartItem.name)}><FontAwesomeIcon icon={faTrashAlt} /> Supprimer</Button>
                            </div>
                            <p>Prix Total: {cartItem.price * cartItem.quantity / 100} €</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart__infos">
                <h2>Montant total de votre panier: {totalAmount}</h2>
                <Button href="#" variant="primary" className="btnClassic cart__btn" onClick={emptyCart}>Vider le panier</Button>
                {message}
            </div>
        </div>
    );
}

export default Cart;

