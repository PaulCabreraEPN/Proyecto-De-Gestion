import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mymodal.css'


function MyModal({imagen, titulo, etiqueta, info, precio, desc}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button variant="light" onClick={handleShow} className='boton_modal'>
        <img src={imagen} alt="Modal content" height={'200px'} className='imgModal'/>

        <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1"><br></br>{titulo}</h5>
                <small>Proximamnete</small>
        </div>
        <div>
          <p>{info}</p>
          <button className='botones'>Ver más</button>
        </div>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title><b>{titulo}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='b1_modal'><img src={imagen} alt="Modal content" height={'200px'} /></div><br></br>
          <h5 className='precio_modal'><b>{precio}</b></h5>
          <h5><b>{titulo}</b></h5>
          <p>{desc}</p>
        </Modal.Body>
        <Modal.Footer className='pie_modal'>
          <Button variant="success">
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
