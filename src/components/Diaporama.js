import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Diaporama.scss';

function Diaporama() {
  return (
    <Carousel>
        <Carousel.Item className="carousel">
            <img
            className="d-block w-100"
            src="http://localhost:3000/images/vcam_2.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className="carousel__title">Zurss 50S</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://localhost:3000/images/vcam_1.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3 className="carousel__title">Hirsch 400DTS</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://localhost:3000/images/vcam_4.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3 className="carousel__title">25mm 4.5</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Diaporama;
