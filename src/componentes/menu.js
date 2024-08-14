import React from 'react';
import "./menu.css";
import { useNavigate } from 'react-router-dom';
import { Navbar} from 'react-bootstrap';
import carrito from './imagenes/Iconos/carrito.png'


export const Menu = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/MyCarrito');
  };

  return (
    <div class='menu'>
        <Navbar className="navbar-custom" variant="dark" expand="lg">
        
        <Navbar.Brand href="#home">SABORES DE ECUADOR</Navbar.Brand>
        

    </Navbar>
    </div>
    
  )
}
