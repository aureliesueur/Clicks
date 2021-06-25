
import React, { useState, useEffect } from 'react';
import Formulaire from './Formulaire';
import { Button } from 'react-bootstrap';
import '../styles/Cart.scss';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faPaypal } from '@fortawesome/free-brands-svg-icons';


function Cart({cart, updateCart, currentUser, setCurrentUser, isLoggedIn}) {
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        cart.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
    }, [cart]);
    const [isModalShown, updateModal] = useState(false);
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
    function raiseQuantity(imageUrl, name, _id, price) {
        const cameraToAdd = cart.find((camera) => camera.name === name);
        const cartWithout = cart.filter((camera) => camera.name !== name);
        updateCart([...cartWithout, {imageUrl, name, price, _id, quantity: cameraToAdd.quantity + 1}]);
    }
    function lowerQuantity(imageUrl, name, _id, price) {
        const cameraToAdd = cart.find((camera) => camera.name === name);
        const cartWithout = cart.filter((camera) => camera.name !== name);
        if(cameraToAdd.quantity <= 1) {
            suppressFromCart(cameraToAdd.name);
        } else {
            updateCart([...cartWithout, {imageUrl, name, _id, price, quantity: cameraToAdd.quantity - 1}]);
        }
    }
    return (
        <div className="cart">
            <h1 className="cart__title">Votre panier</h1>
            <table className="cart__list">
                <tbody>
                {cart.map(cartItem => (
                    <tr key={cartItem.name.toUpperCase()} className="cart__item cartItem">
                        <td><img src={cartItem.imageUrl} alt={`${cartItem.name}`} className="cartItem__img" /></td>
                        <td className="cartItem__title">{cartItem.name}</td>
                        <td className="cartItem__price">Prix à l'unité: {cartItem.price / 100} €</td>
                        <td className="cartItem__quantity">
                            <Button href="#" variant="primary" className="btnClassic" onClick={() => lowerQuantity(cartItem.imageUrl,cartItem.name, cartItem._id, cartItem.price)}><FontAwesomeIcon icon={faMinus} /></Button>
                            <span>{cartItem.quantity}</span>
                            <Button href="#" variant="primary" className="btnClassic" onClick={() => raiseQuantity(cartItem.imageUrl,cartItem.name, cartItem._id, cartItem.price)}><FontAwesomeIcon icon={faPlus} /></Button>
                        </td>
                        <td className="cartItem__suppress">
                            <Button href="#" variant="primary" className="btnClassic" onClick={() => suppressFromCart(cartItem.name)}><FontAwesomeIcon icon={faTrashAlt} /> Supprimer</Button>
                        </td>
                        <td className="cartItem__totalPrice">Prix Total: {cartItem.price * cartItem.quantity / 100} €</td>
                    </tr>
                ))}
                </tbody>
            </table>

            { cart.length > 0 ? (
            <div className="cart__infos infos">
                <h2 className="infos__title">Montant total de votre panier: {totalAmount} €</h2>
                <Button className="btnClassic cart__btn" onClick={emptyCart}><FontAwesomeIcon icon={faTrashAlt} /> Vider le panier</Button>
                <Button className="btnClassic cart__btn" onClick={() =>updateModal(true)}><FontAwesomeIcon icon={faCheck} /> Valider la commande</Button>
                <div className="infos__payment">
                    <FontAwesomeIcon icon={faCcVisa} className="infos__icon"/>
                    <FontAwesomeIcon icon={faCcMastercard} className="infos__icon" />
                    <FontAwesomeIcon icon={faCcAmex} className="infos__icon" />
                    <FontAwesomeIcon icon={faPaypal} className="infos__icon"/>         
                </div>
                { isModalShown ? (
                    <Formulaire cart={cart} updateCart={updateCart} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} updateModal={updateModal}/>
                ) : null }
            </div>
            ) : (
            <div className="infos__message">Votre panier est vide.</div>
            )}
        </div>
    );
}

export default Cart;

