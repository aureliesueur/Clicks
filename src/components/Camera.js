
import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Camera.scss';
import '../styles/App.scss';

function Camera({cart, updateCart}) {
    const {id} = useParams();
    console.log({id});
    useEffect(() => {
        getSingleProduct(id)
    });
    const [camera, setCamera] = useState({});
    const [rSelected, setRSelected] = useState(null);
    function getSingleProduct(id) {  
        fetch ("http://localhost:3000/api/cameras/" + id)
        .then(response => response.json())
        .then(response => {
            setCamera(response);
            //console.log(camera);
        })
        .catch(error => alert("Erreur:" + error));
    }
    function addToCart(imageUrl, name, price) {
        updateCart([...cart, {imageUrl, name, price, quantity: 1}]);
    }
    return (
        <Card style={{width:'18rem'}} className="camera">
            <Card.Img variant="top" src={camera.imageUrl} alt="Image de caméra" className="camera__img"/>
            <Card.Body className="camera__body">
                <h1 className="camera__title">{camera.name}</h1>
                <Card.Text className="camera__text">{camera.description}</Card.Text>
                <Card.Text>Prix: {camera.price} €</Card.Text>
                <Link to="/panier" class="camera__link"><Button variant="primary" className="camera__btn btnClassic" onClick={() => addToCart(camera.imageUrl,camera.name, camera.price)}>Commander</Button></Link>
                <div className="camera__lenses lenses">
                    <h2 className="lenses__title">Sélectionnez la lentille de votre choix</h2>
                    <ButtonGroup className="lenses__btn">
                        <Button onClick={() => setRSelected(1)} active={rSelected === 1}>Pas de préférence</Button>
                        <Button onClick={() => setRSelected(2)} active={rSelected === 2}>{camera.lenses}</Button>
                        <Button onClick={() => setRSelected(3)} active={rSelected === 3}>{camera.lenses}</Button>
                    </ButtonGroup>
                    <p className="lenses__option">Option choisie: {rSelected}</p>
                    </div>
            </Card.Body>
        </Card>           
    );
}

export default Camera;
