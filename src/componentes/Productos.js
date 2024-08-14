import React,{ useState } from 'react';
import  {Menu}  from './menu';
import { Cabecera } from './cabecera';
import logo from './imagenes/MainLogo.png';
import imagen1 from './imagenes1/producto11.jpg';
import imagen2 from './imagenes1/producto2.jpg';
import imagen4 from './imagenes1/Cafe_con_crema_batida.jpg';
import imagen5 from './imagenes1/frapuchino.jpg';
import imagen6 from './imagenes1/americano.jpg';
import imagen7 from './imagenes1/almendras.jpg';
import imagen8 from './imagenes1/mocaccino.jpg';
import imagen9 from './imagenes1/irlandes.jpg';
import imagen10 from './imagenes1/otro.jpg';
import imagen11 from './imagenes1/Brownie.jpg';
import imagen12 from './imagenes1/tarta.jpg';
import imagen13 from './imagenes1/muffin.jpg';
import imagen14 from './imagenes1/galletas.jpg';
import imagen15 from './imagenes1/manzana.jpg';
import imagen16 from './imagenes1/macarons.jpg';
import imagen17 from './imagenes1/panna.jpg';
import imagen18 from './imagenes1/tiramisu.jpg';
import imagen19 from './imagenes1/zanahoria.jpg';
import imagen20 from './imagenes1/zona1.jpg';
import imagen21 from './imagenes1/zona2.jpg';
import imagen22 from './imagenes1/zona3.jpg';
import imagen23 from './imagenes1/zona4.jpg';
import imagen24 from './imagenes1/zona5.jpg';
import imagen25 from './imagenes1/zona6.jpg';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Pie } from '../componentes/pie';
import { Container as BootstrapContainer } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyModal from './mymodal1'
import './Productos.css'

export const Productos = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '', description: '' });

  const handleShow = (src, alt, description) => {
    setSelectedImage({ src, alt, description });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

    return (
    <div>
    
      <Cabecera/>
      <Menu/>
      <Container className="text-center" >
      <Navbar variant="light" sticky="top" id='navbar'>
            <Container id='navbar'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="me-auto">
                        <Nav.Link href="#list-item-1">Intensos</Nav.Link>
                        <Nav.Link href="#list-item-2">Aromátcos</Nav.Link>
                        <Nav.Link href="#list-item-3">Suaves</Nav.Link>
                        <Nav.Link href="#list-item-4">Catálogo Digital</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
 
            <br></br>
            <div className="row">
                
  <div className="col-md-12 ms-2">
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        className="scrollspy-example"
        tabIndex="0"
      >
        <h4 id="list-item-1" class="fw-bold fst-italic " >Cafes Intensos</h4>
        <Row>
          <Col xs={6} md={4} className="mb-4">
            <MyModal imagen={imagen1} titulo='MONTAÑES' info='Café Montañés es una marca conocida por su enfoque en ofrecer café de alta calidad' precio='Disponible' desc='Montañés Café es una marca que se especializa en la producción y comercialización de café, destacándose por sus orígenes en regiones montañosas que contribuyen a la calidad de sus granos. Su historia suele estar ligada a la tradición cafetera y al compromiso con prácticas de cultivo sostenibles.'/>  
          </Col>
          <Col xs={6} md={4} className="mb-4">
            <MyModal imagen={imagen8} titulo='RICO-SUAVE' info='Café RicoSuave es una marca que se ha ganado un lugar en el mercado del café por sus productos de alta calidad ' precio='Disponible' desc='La gama de productos de Café RicoSuave incluye una variedad de opciones de café, tales como granos enteros, café molido y cápsulas. Su especialidad es ofrecer un café de sabor suave, ideal para aquellos que buscan una experiencia de café menos intensa pero igualmente placentera.'/>  
          </Col>
          <Col xs={6} md={4} className="mb-4">
            <MyModal imagen={imagen7} titulo='Vélez' info='Café Vélez es una marca reconocida en el mercado del café que se distingue por su enfoque en la calidad y la tradición.' precio='Disponible' desc='La marca se enfoca en la calidad del café mediante un proceso riguroso de selección y tostado de granos. Su objetivo es ofrecer un producto con un perfil de sabor equilibrado y suave, sin comprometer la frescura ni la riqueza del café.'/>  
          </Col>
        </Row>
    

      <h4 id="list-item-2" class="fw-bold fst-italic ">Cafes Aromátcos</h4>
      <Row className="mb-4">
        <Col xs={6} md={4} className="mb-4">
          <MyModal imagen={imagen2} titulo='DON CAFÉ' info='Don Café es una marca que se destaca en el mercado de café por su compromiso con la calidad' precio='Disponible' desc='La oferta de Don Café incluye una variedad de opciones, tales como café en granos, café molido y cápsulas. La marca se enfoca en proporcionar una experiencia de café rica y auténtica, con distintas mezclas y perfiles de sabor para satisfacer diversos gustos.'/>  
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <MyModal imagen={imagen9} titulo='CAFÉS DE LOJA' info='Cafés de Loja es una marca que se destaca en el mercado del café por su enfoque en la calidad y el sabor distintivo de sus granos.' precio='Disponible' desc='La marca se caracteriza por su atención meticulosa a la calidad. Don Café selecciona granos de café premium y emplea técnicas de tostado que preservan y realzan los sabores naturales del café. Su objetivo es ofrecer un producto consistente y de alta calidad en cada envase.'/>  
          
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <MyModal imagen={imagen10} titulo='CAFÉ INDERA' info='Café Indera es una marca que se enfoca en ofrecer una experiencia de café auténtica, destacándose por su compromiso con la tradición y la calidad.' precio='Disponible' desc='Café Indera tiene sus raíces en regiones cafetaleras con una rica herencia en la producción de café. La marca se destaca por su enfoque en preservar y transmitir las tradiciones del cultivo y preparación del café, asegurando que cada taza ofrezca una experiencia auténtica.'/>  
        </Col>
      </Row>

      <h4 id="list-item-3" class="fw-bold fst-italic ">Cafes Suaves</h4>
      <Row className="mb-4">
        <Col xs={6} md={4} className="mb-4">
          <MyModal imagen={imagen12} titulo='GALLETI' info=' Café Gallito - Tostado, de color inteso pero con notas suaves.' precio='Disponible' desc='La Maca Galletti Café es una máquina de café diseñada para ofrecer una experiencia de café de alta calidad tanto en entornos comerciales como en el hogar. Esta máquina es conocida por su diseño elegante y funcionalidad avanzada. Su apariencia moderna combina acabados metálicos con detalles en negro o acero inoxidable, lo que la hace destacar en cualquier cocina o espacio de cafetería.'/>  
        
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <MyModal imagen={imagen15} titulo='RAYMI COFFEE' info='Una experiencia única en el mundo del café, ' precio='Disponible' desc='Raymi Coffee es una marca que se destaca por ofrecer una experiencia única en el mundo del café, enfocándose en la calidad y la autenticidad. La Maca Galletti Café de Raymi Coffee es una máquina que refleja estos valores con características diseñadas para satisfacer a los amantes del café más exigentes.'/>  
        
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <MyModal imagen={imagen17} titulo='Fiesta del Séptimo Café ' info='¡Esperamos verte allí para celebrar juntos el Séptimo Café! ☕🎉' precio='Dispnible' desc='¡Prepárate para una experiencia café-inspirada única! Únete a nosotros para una celebración llena de sabor, amistad y diversión. Habrá una variedad de cafés exquisitos, deliciosos bocadillos, y actividades especiales para disfrutar. ¡No te pierdas la oportunidad de compartir una taza y una sonrisa!'/>  
        
        </Col>
      </Row>

      
      <div className='text-center'>
      <h4 id="list-item-4" class="fw-bold fst-italic text-white">Menu Digital</h4>
      <a className='otrolink' href="/ruta/del/archivo.pdf" download>DESCARGAR EL CATALOGO EN LINEA</a>
      </div>
      
    </div>
  </div>
</div>
</Container>
<br></br>
<Pie/>
<Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage.src} alt={selectedImage.alt} style={{ width: '100%' }} />
          <p>{selectedImage.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} style={{ backgroundColor: 'green', color: 'white', display: 'block', margin: '0 auto' }}>Comprar</button>
        </Modal.Footer>
      </Modal>
    </div>
    );
}