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
      <Navbar style={{ backgroundColor: '#000018' }} variant="dark" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#list-item-1">Cafes</Nav.Link>
                        <Nav.Link href="#list-item-2">Postres y otros</Nav.Link>
                        <Nav.Link href="#list-item-3">Reservaciones</Nav.Link>
                        <Nav.Link href="#list-item-4">Menu Digital</Nav.Link>
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
        <h4 id="list-item-1" class="fw-bold fst-italic text-white">Cafes</h4>
        <Row>
          <Col xs={6} md={4} className="mb-4">
            <img
              className="img-fluid rounded"
              src={imagen1}
              alt="Café con leche"
              style={{ maxWidth: '100%', height: 'auto' }}
              onClick={() => handleShow(imagen1, 'Café con leche', 'Espresso combinado con una generosa cantidad de leche vaporizada, creando una bebida suave y cremosa con un equilibrio perfecto entre café y leche.')}
            />
            <h5 className="text-white fw-bold">Café con leche</h5>
            <p className='text-white'>
              Espresso combinado con una generosa cantidad de leche vaporizada, creando una bebida suave y cremosa con un equilibrio perfecto entre café y leche.
            </p>
          </Col>
          <Col xs={6} md={4} className="mb-4">
            <img
              className="img-fluid rounded"
              src={imagen2}
              alt="Capuchino"
              style={{ maxWidth: '100%', height: 'auto' }}
              onClick={() => handleShow(imagen2, 'Capuchino', 'Un café con una capa cremosa de espuma de leche, ideal para quienes disfrutan de un sabor equilibrado entre el espresso y la leche.')}
            />
            <h5 className="fw-bold text-white">Capuchino</h5>
            <p className='text-white'>
              Espresso cubierto con una capa de espuma de leche espesa, proporcionando un sabor fuerte a café con una textura ligera y aireada.
            </p>
          </Col>
          <Col xs={6} md={4} className="mb-4">
            <img
              className="img-fluid rounded"
              src={imagen4}
              alt="Café con crema batida"
              style={{ maxWidth: '100%', height: 'auto' }}
              onClick={() => handleShow(imagen4, 'Café con crema batida', 'Un espresso rico y fuerte cubierto con una generosa porción de crema batida, perfecto para un toque indulgente y suave.')}

            />
            <h5 className="text-white fw-bold">Café con crema batida</h5>
            <p className='text-white'>
              Espresso servido con una capa de crema batida en la parte superior, añadiendo un toque dulce y lujoso a tu bebida.
            </p>
          </Col>
        </Row>
        
    <Row>
      <Col xs={6} md={4} className="mb-4">
        <Image
          className="img-fluid rounded"
          src={imagen5}
          alt="Frapuchino"
          style={{ maxWidth: '100%', height: 'auto' }}
          onClick={() => handleShow(imagen5, 'Frapuchino', 'Una bebida helada y refrescante hecha con café, leche, hielo y un toque dulce, todo mezclado hasta alcanzar una textura cremosa.')}

        />
        <h5 className="text-white fw-bold">Frapuchino</h5>
        <p className='text-white'>
          Café frío mezclado con hielo y leche, con una textura cremosa y refrescante, ideal para los días calurosos.
        </p>
      </Col>
      <Col xs={6} md={4} className="mb-4">
        <Image
          className="img-fluid rounded"
          src={imagen6}
          alt="Café Americano"
          style={{ maxWidth: '100%', height: 'auto' }}
          onClick={() => handleShow(imagen6, 'Café Americano', 'Un espresso alargado con agua caliente, resultando en una bebida suave y ligera con un sabor más suave que el espresso tradicional.')}

        />
        <h5 className="text-white fw-bold">Café Americano</h5>
        <p className='text-white'>
          Espresso diluido con agua caliente, ofreciendo un sabor más suave y menos concentrado que el espresso puro.
        </p>
      </Col>
      <Col xs={6} md={4} className="mb-4">
        <Image
          className="img-fluid rounded"
          src={imagen7}
          alt="Café con almendras"
          style={{ maxWidth: '100%', height: 'auto' }}
          onClick={() => handleShow(imagen7, 'Café con almendras', 'Un café aromático combinado con leche de almendras, ofreciendo un sabor delicado y ligeramente dulce con un toque de nuez.')}

        />
        <h5 className="text-white fw-bold">Café con almendras</h5>
        <p className='text-white'>
          Espresso combinado con leche vaporizada y un toque de jarabe de almendras, proporcionando un sabor dulce y ligeramente a nuez.
        </p>
      </Col>
    </Row>
    
    <Row>
      <Col xs={6} md={4} className="mb-4">
        <Image
          className="img-fluid rounded"
          src={imagen8}
          alt="Mochaccino"
          style={{ maxWidth: '100%', height: 'auto' }}
          onClick={() => handleShow(imagen8, 'Mochaccino', 'Una deliciosa combinación de espresso, chocolate y leche vaporizada, coronada con una capa de espuma suave y cremosa.')}

        />
        <h5 className="text-white fw-bold">Mochaccino</h5>
        <p className='text-white'>
          Espresso con leche vaporizada y un toque de sirope de chocolate, decorado con crema batida y espolvoreado con cacao, ideal para los amantes del chocolate.
        </p>
      </Col>
      <Col xs={6} md={4} className="mb-4">
        <Image
          className="img-fluid rounded"
          src={imagen9}
          alt="Café irlandés"
          style={{ maxWidth: '100%', height: 'auto' }}
          onClick={() => handleShow(imagen9, 'Café irlandés', 'Un café fuerte mezclado con whisky irlandés y azúcar, cubierto con una capa de crema ligeramente batida para un toque indulgente.')}

        />
        <h5 className="text-white fw-bold">Café irlandés</h5>
        <p className='text-white'>
          Café negro mezclado con whisky irlandés y cubierto con crema batida, ofreciendo una combinación cálida y reconfortante de sabores.
        </p>
      </Col>
      <Col xs={6} md={4} className="mb-4">
        <Image
          className="img-fluid rounded"
          src={imagen10}
          alt="Affogato"
          style={{ maxWidth: '100%', height: 'auto' }}
          onClick={() => handleShow(imagen10, 'Affogato', 'Un postre italiano que combina un espresso caliente vertido sobre una bola de helado de vainilla, creando un delicioso contraste entre lo frío y lo caliente.')}

        />
        <h5 className="text-white fw-bold">Affogato</h5>
        <p className='text-white'>
          Una bola de helado bañada con un espresso caliente, creando un contraste delicioso entre el frío del helado y el calor del café.
        </p>
      </Col>
    </Row>
      <h4 id="list-item-2" class="fw-bold fst-italic text-white">Postres y otros</h4>
      <Row className="mb-4">
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen11}
            alt="Brownie de chocolate"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen11, 'Brownie de chocolate', 'Un postre denso y húmedo, hecho con chocolate derretido, ofreciendo una textura rica y un sabor intenso para los amantes del chocolate.')}

          />
          <h5 className="text-white fw-bold">Brownie de chocolate</h5>
          <p className='text-white'>
            Delicioso pastelito de chocolate con una textura densa y húmeda, perfecto para acompañar tu café.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen12}
            alt="Tarta de queso"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen12, 'Tarta de queso', 'Un postre cremoso y suave hecho con queso crema, sobre una base de galleta, perfecto para un final ligero y delicioso.')}

          />
          <h5 className="text-white fw-bold">Tarta de queso</h5>
          <p className='text-white'>
            Suave y cremosa tarta con una base de galleta crujiente, ideal para un final dulce en tu visita.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen13}
            alt="Muffin de arándanos"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen13, 'Muffin de arándanos', 'Un muffin esponjoso y dulce, repleto de arándanos frescos, ideal para un desayuno o merienda reconfortante.')}

          />
          <h5 className="text-white fw-bold">Muffin de arándanos</h5>
          <p className='text-white'>
            Muffin esponjoso lleno de arándanos frescos, con un toque de azúcar en la parte superior para un toque dulce y crujiente.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen14}
            alt="Galletas con chispas de chocolate"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen14, 'Galletas con chispas de chocolate', 'Deliciosas galletas crujientes por fuera y suaves por dentro, llenas de chispas de chocolate derretido, perfectas para cualquier momento del día.')}

          />
          <h5 className="text-white fw-bold">Galletas con chispas de chocolate</h5>
          <p className='text-white'>
            Galletas caseras con trozos generosos de chocolate, crujientes por fuera y suaves por dentro.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen15}
            alt="Tarta de manzana"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen15, 'Tarta de manzana', 'Un postre clásico que combina manzanas frescas especiadas con canela, envueltas en una masa dorada y crujiente, ideal para los amantes de los sabores tradicionales.')}

          />
          <h5 className="text-white fw-bold">Tarta de manzana</h5>
          <p className='text-white'>
            Tarta tradicional con relleno de manzana especiada y una corteza dorada, perfecta para los amantes de los sabores clásicos.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen16}
            alt="Macarons"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen16, 'Macarons', 'Delicados y coloridos pasteles franceses hechos con merengue, rellenos de crema o ganache, perfectos para un bocado dulce y elegante.')}

          />
          <h5 className="text-white fw-bold">Macarons</h5>
          <p className='text-white'>
            Dulces y delicadas galletas francesas de almendra con relleno de crema, disponibles en una variedad de sabores.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen17}
            alt="Panna cotta"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen17, 'Panna cotta', 'Un postre italiano suave y cremoso, hecho con nata y gelatina, a menudo servido con una salsa de frutas o caramelo para un contraste dulce.')}

          />
          <h5 className="text-white fw-bold">Panna cotta</h5>
          <p className='text-white'>
            Postre italiano de crema cocida, suave y ligera, con un toque de vainilla y a menudo acompañada de coulis de frutas.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen18}
            alt="Tiramisu"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen18, 'Tiramisu', 'Un postre italiano clásico, compuesto por capas de bizcochos empapados en café y una suave mezcla de queso mascarpone, espolvoreado con cacao.')}

          />
          <h5 className="text-white fw-bold">Tiramisu</h5>
          <p className='text-white'>
            Postre italiano a base de capas de bizcocho empapado en café y crema de mascarpone, con un toque de cacao en polvo.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen19}
            alt="Pastel de zanahoria"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen19, 'Pastel de zanahoria', 'Un pastel húmedo y especiado, hecho con zanahorias ralladas y cubierto con un glaseado de queso crema, ofreciendo un equilibrio perfecto entre dulzura y especias.')}

          />
          <h5 className="text-white fw-bold">Pastel de zanahoria</h5>
          <p className='text-white'>
            Pastel húmedo y especiado hecho con zanahorias frescas, cubierto con un glaseado de queso crema para un sabor irresistible.
          </p>
        </Col>
      </Row>

      <h4 id="list-item-3" class="fw-bold fst-italic text-white">Reservaciones</h4>
      <Row className="mb-4">
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen20}
            alt="Rincón Vintage"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen20, 'Rincón Vintage', 'Un acogedor rincón decorado con piezas de época y muebles retro, ofreciendo un ambiente nostálgico ideal para disfrutar de un café relajante.')}

          />
          <h5 className="text-white fw-bold">Rincón Vintage</h5>
          <p className='text-white'>
            Un área decorada con muebles retro, posters antiguos y una selección de vinilos. Este espacio transporta a los clientes a tiempos pasados, con una atmósfera nostálgica y acogedora.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen21}
            alt="Sala de Estilo Industrial"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen21, 'Sala de Estilo Industrial', 'Un espacio moderno con elementos de metal y madera, grandes ventanales y una decoración minimalista, perfecto para disfrutar de un café en un ambiente contemporáneo.')}

          />
          <h5 className="text-white fw-bold">Sala de Estilo Industrial</h5>
          <p className='text-white'>
            Un diseño urbano con paredes de ladrillo expuesto, muebles metálicos y luces de estilo industrial. Ideal para aquellos que disfrutan de un ambiente moderno y minimalista.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen22}
            alt="Espacio Tropical"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen22, 'Espacio Tropical', 'Un ambiente fresco y vibrante, decorado con plantas tropicales y colores brillantes, ideal para disfrutar de un café rodeado de naturaleza y buen clima.')}

          />
          <h5 className="text-white fw-bold">Espacio Tropical</h5>
          <p className='text-white'>
            Decorado con plantas exóticas, colores vibrantes y muebles de mimbre. Este espacio ofrece un ambiente relajado y veraniego, evocando la sensación de estar en una playa tropical.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen23}
            alt="Zona Bohemia"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen23, 'Zona Bohemia', 'Un área acogedora y artística, decorada con obras de arte local y un ambiente relajado, perfecta para disfrutar de un café mientras se inspira en la creatividad.')}

          />
          <h5 className="text-white fw-bold">Zona Bohemia</h5>
          <p className='text-white'>
            Un área con alfombras y cojines en el suelo, decorada con arte local y accesorios étnicos. Perfecta para quienes buscan un ambiente relajado y artístico, con un toque de eclecticismo.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen24}
            alt="Rincón Literario"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen24, 'Rincón Literario', 'Un espacio acogedor lleno de estanterías de libros, donde los amantes de la lectura pueden disfrutar de un buen café mientras se sumergen en sus historias favoritas.')}

          />
          <h5 className="text-white fw-bold">Rincón Literario</h5>
          <p className='text-white'>
            Ambientado como una biblioteca clásica, con estantes llenos de libros antiguos, sillas de cuero y lámparas de lectura. Este espacio es ideal para los amantes de la literatura y ofrece un ambiente tranquilo para disfrutar de una buena lectura con café.
          </p>
        </Col>
        <Col xs={6} md={4} className="mb-4">
          <Image
            className="img-fluid rounded"
            src={imagen25}
            alt="Sala de Inspiración Zen"
            style={{ maxWidth: '100%', height: 'auto' }}
            onClick={() => handleShow(imagen25, 'Sala de Inspiración Zen', 'Un ambiente tranquilo y sereno, decorado con elementos naturales y suaves tonos, ideal para relajarse y disfrutar de un café en paz y armonía.')}

          />
          <h5 className="text-white fw-bold">Sala de Inspiración Zen</h5>
          <p className='text-white'>
            Un área tranquila con elementos de diseño japonés, como tatamis, plantas de bambú y fuentes de agua. Este espacio está diseñado para ofrecer paz y serenidad, perfecto para meditar o relajarse mientras se toma un café.
          </p>
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