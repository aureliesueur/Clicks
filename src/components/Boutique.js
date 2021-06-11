
import React from 'react';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Boutique.scss';
import '../styles/App.scss';

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

    return (
        <div className="products">
            <h1 className="products__title">Découvrez notre sélection</h1>
            <div className="products__list">
                {products.map(product => (
                    <Card key={product.name.toUpperCase()} style={{width:'18rem'}} className="products__item">
                        <Card.Img variant="top" src={product.imageUrl} alt="Image de caméra" />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>Prix: {product.price} €</Card.Text>
                            <div className="products__btns">
                                <Button href="#" variant="primary" className="btnClassic">Commander</Button>
                                <Link to={`/boutique/${product._id}`}><Button className="btnClassic">Détails</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Boutique;
//Link to={`/boutique/${product._id}`}
