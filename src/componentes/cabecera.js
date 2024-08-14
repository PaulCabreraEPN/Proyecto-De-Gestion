import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './imagenes/MainLogo.png';
import user from './imagenes/Usuario_logo.webp';
import './cabecera.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

export const Cabecera = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLoginClickPro = () => {
    navigate('/Productos');
  };

  const handleLoginClickProm = () => {
    navigate('/Promociones');
  };

  const handleLoginClickSob = () => {
    navigate('/Sobre_Nosotros');
  };

  const handleLoginClickIn = () => {
    navigate('/Inversiones');
  };

  const handleLoginClickI = () => {
    navigate('/' );
  };

  return (
    
    <Navbar expand="lg" className='navbar navbar-light' id='cabecera'>
      
        <Navbar.Brand href="https://saboresdeecuador-qkf02k3xl-paul-cabreras-projects-5ab7ad97.vercel.app/">
          <img src={logo} alt="Logo" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link-custom" href='https://saboresdeecuador-qkf02k3xl-paul-cabreras-projects-5ab7ad97.vercel.app/' id='secciones'>Inicio</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickPro} id='secciones'>Marcas</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickProm} id='secciones'>Eventos</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickIn} id='secciones'>Inversiones</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickSob} id='secciones'>Sobre Nosotros</Nav.Link>
            
          </Nav>
          <Form inline className="my-2 my-lg-0">
            <FormControl
              type="search"
              placeholder="Buscar productos"
              className="mr-sm-2"
              aria-label="Search"
            />
          </Form>
          <div className="d-flex align-items-center ml-3">
            <Button 
              id='boton_inicio'
              variant="outline-primary" 
              onClick={handleLoginClick}
            >
              Iniciar sesión
            </Button>
            <a 
              className="ml-3" 
              href="#" 
              onClick={handleLoginClick}
            >
              <img src={user} alt="Usuario" width="70" />
            </a>
          </div>
        </Navbar.Collapse>
     
    </Navbar>
  );
};
