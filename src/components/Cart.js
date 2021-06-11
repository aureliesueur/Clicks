
import React from 'react';
import {useEffect} from "react";
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/Cart.scss';
import '../styles/App.scss';

function Cart({cart, updateCart}) {
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    const message = cart.length > 0 ? (null) : (<div className="cart__message">Votre panier est vide</div>);
    function emptyCart() {
        updateCart([]);
    }
    function SuppressFromCart(name) {
        const filteredCart = cart.filter(camera => camera.name !== name)
        updateCart([...filteredCart]);
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
                            <p>Prix: {cartItem.price} €</p>
                            <p>Quantité: {cartItem.quantity}</p>
                            <div className="cart__suppressItem">
                                <Button href="#" variant="primary" className="btnClassic" onClick={() => SuppressFromCart(cartItem.name)}>Supprimer</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Button href="#" variant="primary" className="btnClassic cart__btn" onClick={emptyCart}>Vider le panier</Button>
            {message}
        </div>
    );
}

export default Cart;

