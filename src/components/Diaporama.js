import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Diaporama() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://localhost:3000/images/vcam_2.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Zurss 50S</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://localhost:3000/images/vcam_1.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Hirsch 400DTS</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://localhost:3000/images/vcam_4.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>25mm 4.5</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Diaporama;
