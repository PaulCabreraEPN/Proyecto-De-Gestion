import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './componentes/menu.js';
import { Cabecera } from './componentes/cabecera.js';
import { Pie } from './componentes/pie.js';
import Registro from './componentes/registro.js';
import Login from './componentes/login.js';
import { Productos } from './componentes/Productos.js';
import { Sobre_Nosotros } from './componentes/Sobre_Nosotros.js';
import { useNavigate } from 'react-router-dom';
import { Inversiones } from './componentes/Inversiones.js';
import promo1 from './componentes/imagenes/Promocionales/Promo_bbble_coffee.jpg';
import promo2 from './componentes/imagenes/Promocionales/Promo_black_drink.jpg';
import promo3 from './componentes/imagenes/Promocionales/Promo_ice_coffee.jpg';
import promo4 from './componentes/imagenes/Promocionales/Promo_ice_cream.jpg';
import inversion_img from './componentes/imagenes/InversionCafe.jpg'
import festival_img from './componentes/imagenes/Fiesta del Cafe.jpg'
import { Promociones } from './componentes/Promociones.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyCarrito } from './componentes/MyCarrito.js';
import InicioMarcas from './componentes/inicioMarcas';



function HomePage() {
  const navigate = useNavigate();

  const handleLoginClickProm = () => {
    navigate('/Promociones');
  };

  const handleLoginClickIn = () => {
    navigate('/Inversiones');
  };

  const handleLoginClickMa = () => {
    navigate('/Productos');
  };

  
  return (
    <>
      <Cabecera />
      <Menu />
      <main className='cuerpo'>
        <div id='promos' className='container'>
          <div className='row'>
            <div className='col-6'>
              <br></br>
              <h4> Disfruta de las Distintas Marcas </h4>
            </div>
            <div className='col-6' id='cabezaProm'>
            <br></br>
              <button type='button' onClick={handleLoginClickMa} className='botonProm'>Ver todas las Marcas</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo3} alt="Promo 3" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo2} alt="Promo 2" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo1} alt="Promo 1" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo4} alt="Promo 4" className='promocional' />
            </div>
          </div>
        </div>
        <div className='Invitacion'>
          <h1>Conoce nuestra Plataforma</h1>
          <p>Te invitamos a explorar nuestra Plataforma, dedicada a los amantes del Café Ecuatoriano.</p>
          <button type='button' className='botones'>Conocer más</button>
        </div>
      
        <div className='Invitacion' id='ContInversiones'>
        <div className='container' id='ContInversiones'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
              <img src={inversion_img} alt="Inversion" className='Inversion' width={'500px'}/>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <h3>
                ¡Invierte en la Excelencia del Café Ecuatoriano con Sabores de Ecuador!
              </h3>
              <h4>
                Descubre Oportunidades Únicas
              </h4>
              <p>
              En nuestra plataforma, te ofrecemos la oportunidad de invertir en algunas de las marcas de café más prometedoras de Ecuador. Cada marca tiene una historia única y una visión apasionante que busca elevar la calidad del café ecuatoriano a nuevas alturas.
              </p>
              <button type='button' className='botones' onClick={handleLoginClickIn}>Invierte Aquí</button>
            </div>
          </div>
        </div>
        </div>

        <div className='Invitacion'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
              <h3>
                Nuestros Próximos Eventos
              </h3>
              <h4>
                ¡No Te Lo Pierdas!
              </h4>
              <p>
              Cada evento es una oportunidad para sumergirte en la cultura cafetera de Ecuador y compartir la pasión que tenemos por el café. Ven y celebra con nosotros el legado del café ecuatoriano, conoce a otros entusiastas y crea recuerdos inolvidables.
              </p>
              <button type='button' className='botones' onClick={handleLoginClickProm}>Descubre Aquí </button>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <img src={festival_img} alt="Inversion" className='Inversion' width={'300px'}/>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Pie />

      
      
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />}  />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Inversiones' element={<Inversiones />} />
        <Route path='/Sobre_Nosotros' element={<Sobre_Nosotros />} />
        <Route path='/Promociones' element={<Promociones />} />
        <Route path='/InicioMarcas'  element={<InicioMarcas />}/>
        <Route path='/MyCarrito' element={<MyCarrito/>} />
      </Routes>
    </Router>
  );
}
export default App;