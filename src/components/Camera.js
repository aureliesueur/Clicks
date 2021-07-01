
import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Camera.scss';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


function Camera({cart, updateCart}) {
    const {id} = useParams();
    console.log({id});
    useEffect(() => {
        getSingleProduct(id)
    });
    const [camera, setCamera] = useState({});
    const [lenses, updateLenses] = useState([]);
    const [rSelected, setRSelected] = useState(null);
    function getSingleProduct(id) {  
        fetch ("http://localhost:3000/api/cameras/" + id)
        .then(response => response.json())
        .then(response => {
            setCamera(response);
            updateLenses(response.lenses);
            //console.log(camera);
        })
        .catch(error => alert("Erreur:" + error));
    }
    function addToCart(imageUrl, name, _id, price) {
        const cameraToAdd = cart.find((camera) => camera.name === name);
        if (cameraToAdd) {
            const cartWithout = cart.filter((camera) => camera.name !== name);
            updateCart([...cartWithout, {imageUrl, name, _id, price, quantity: cameraToAdd.quantity + 1}])
        } else {
        updateCart([...cart, {imageUrl, name, _id, price, quantity: 1}]);
        }
    }
    return (
        <Card style={{width:'18rem'}} className="camera">
            <Card.Img variant="top" src={camera.imageUrl} alt="Image de caméra" className="camera__img"/>
            <Card.Body className="camera__body">
                <h1 className="camera__title">{camera.name}</h1>
                <Card.Text className="camera__text">{camera.description}</Card.Text>
                <Card.Text>Prix: {camera.price / 100} €</Card.Text>
                <Link to="/panier" class="camera__link"><Button variant="primary" className="camera__btn btnClassic" onClick={() => addToCart(camera.imageUrl,camera.name, camera._id, camera.price)}><FontAwesomeIcon icon={faCartPlus} /> Commander</Button></Link>
                <div className="camera__lenses lenses">
                    <h2 className="lenses__title">Sélectionnez la lentille de votre choix</h2>
                    <ButtonGroup className="lenses__btn">
                        <Button onClick={() => setRSelected("Pas de préférence")} active={rSelected === "Pas de préférence"}>Pas de préférence</Button>

                    
                        {lenses.map(lense => (
                            <Button onClick={() => setRSelected(lense)} active={rSelected === lense}>{lense}</Button>
                        ))}

                    </ButtonGroup>
                    <p className="lenses__option">Option choisie: {rSelected}</p>
                    </div>
            </Card.Body>
        </Card>           
    );
}

export default Camera;

/* <Button onClick={() => setRSelected(2)} active={rSelected === 2}>{camera.lenses[0]}</Button>
                        <Button onClick={() => setRSelected(3)} active={rSelected === 3}>{camera.lenses[1]}</Button>*/
