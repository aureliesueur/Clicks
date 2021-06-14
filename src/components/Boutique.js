
import React from 'react';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Boutique.scss';
import '../styles/App.scss';
import '../lib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

function Boutique({cart, updateCart}) {
    useEffect(() => {
        getAllProducts()
    }, []);
    const [products, setProducts] = useState([]);
    function getAllProducts() {
        fetch ("http://localhost:3000/api/cameras")
        .then(response => response.json())
        .then(response => {
            setProducts(response);
        })
        .catch(error => alert("Erreur:" + error));
    }
    /* OU
    const getAllProducts = async () => {
        const response = await fetch("http://localhost:3000/api/cameras");
        const allProducts = await response.json();
        console.log(allProducts);
        setProducts(allProducts);
    };*/
    function addToCart(imageUrl, name, price) {
        const cameraToAdd = cart.find((camera) => camera.name === name);
        if (cameraToAdd) {
            const cartWithout = cart.filter((camera) => camera.name !== name);
            updateCart([...cartWithout, {imageUrl, name, price, quantity: cameraToAdd.quantity + 1}])
        } else {
        updateCart([...cart, {imageUrl, name, price, quantity: 1}]);
        }
    }

    return (
        <div className="products">
            <h1 className="products__title">Découvrez notre sélection</h1>
            <div className="products__list">
                {products.take().map(product => (
                    <Card key={product.name.toUpperCase()} style={{width:'18rem'}} className="products__item">
                        <Card.Img variant="top" src={product.imageUrl} alt="Image de caméra" />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>Prix: {product.price / 100} €</Card.Text>
                            <div className="products__btns">
                                <Button variant="primary" className="btnClassic" onClick={() => addToCart(product.imageUrl,product.name, product.price)}><FontAwesomeIcon icon={faCartPlus} /> Commander en un clic</Button>
                                <Link to={`/boutique/${product._id}`}><Button className="btnClassic"><FontAwesomeIcon icon={faInfo} /> Détails</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Boutique;

