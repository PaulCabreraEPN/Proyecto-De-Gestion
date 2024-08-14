import React from 'react'
import slider1 from './imagenes/Promocionales/Slider-1.jpeg'
import slider2 from './imagenes/Promocionales/Slider-2.jpg'
import slider3 from './imagenes/Promocionales/Slider-3.jpg'
import slider4 from './imagenes/Promocionales/Slider-4.jpg'
import './Micarrusel.css'
import { Carousel } from 'react-bootstrap';

export const Micarrusel = () => {
  return (
    <div>
        <div id='miCarrusel'>
        <Carousel>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 "
          src={slider1}
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 "
          src={slider2}
          alt="Second slide"
         
        />
        
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
        <img
          className="d-block w-100 "
          src={slider3}
          alt="Third slide"
    
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
        <img
          className="d-block w-100 "
          src={slider4}
          alt="Third slide"
    
        />
      </Carousel.Item>
    </Carousel>
        </div>

    
    </div>
  )
}
