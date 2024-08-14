import React from 'react';
import { Menu } from './menu.js';
import { Cabecera } from './cabecera.js';
import { Micarrusel } from './Micarrusel.js';
import { Pie } from './pie.js';
import MyModal from './mymodal'
import imagen1 from './imagenes1/Brownie.jpg';
import imagen2 from './imagenes1/Cafe_con_crema_batida.jpg';
import imagen3 from './imagenes1/macarons.jpg';
import imagen4 from './imagenes1/tiramisu.jpg';
import imagen5 from './imagenes1/frapuchino.jpg';
import imagen6 from './imagenes1/americano.jpg';
import etiqueta10 from './imagenes/etiquetas/10%.jpg'
import etiqueta15 from './imagenes/etiquetas/15%.jpg'
import etiqueta50 from './imagenes/etiquetas/50%.jpg'
import './Promociones.css'

import 'bootstrap/dist/css/bootstrap.min.css';

export const Promociones = () => {
  return (
    <div id='promociones'>
        <Cabecera></Cabecera>
        <Menu></Menu>
        <br></br>
        <Micarrusel></Micarrusel>
        <div className='container text-center pt-3'>
          <div className='row'>
            <div className='col'>
              <div className='list-group'>

                <MyModal imagen={imagen1} titulo='Fiesta del Séptimo Café ' etiqueta={etiqueta10} info='¡Esperamos verte allí para celebrar juntos el Séptimo Café! ☕🎉' precio='Gratuito' desc='¡Prepárate para una experiencia café-inspirada única! Únete a nosotros para una celebración llena de sabor, amistad y diversión. Habrá una variedad de cafés exquisitos, deliciosos bocadillos, y actividades especiales para disfrutar. ¡No te pierdas la oportunidad de compartir una taza y una sonrisa!'/>
                <MyModal imagen={imagen2} titulo='Festival del Café - Perú' etiqueta={etiqueta15} info='¡Únete a nosotros para celebrar el Festival del Café y disfruta de una experiencia que despierta todos los sentidos! ☕🎊' precio='Gratuito' desc='¡Descubre la magia del café peruano en nuestro Festival! Ven y celebra con nosotros la rica tradición cafetera de Perú en un evento lleno de sabores, aromas y cultura. Disfruta de una exhibición de cafés únicos, aprende sobre los procesos de producción, y participa en talleres y degustaciones que te llevarán en un viaje sensorial inolvidable.' />
              </div>
            </div>
            <div className='col'>
              <div className='list-group'>

                <MyModal imagen={imagen3} titulo='Feria del Café - Colombia' etiqueta={etiqueta10} info='¡No te pierdas esta celebración del café que pone en alto el orgullo colombiano! ☕🎶🎉' precio='Gratuito' desc='¡Ven y celebra con nosotros la excelencia del café colombiano! Únete a la Feria del Café y disfruta de una experiencia única llena de sabor, cultura y tradición. Desde degustaciones de los cafés más finos hasta exposiciones sobre el proceso de producción, esta feria es el lugar perfecto para los amantes del café y la cultura colombiana.'/>
                <MyModal imagen={imagen5} titulo='Fesival del Café Kimbirí' etiqueta={etiqueta50} info='¡Ven y celebra con nosotros el sabor y la tradición del café Kimbirí! ☕🌱' precio='Gratuito' desc='¡Únete a nosotros para celebrar el Festival del Café Kimbirí! Ven y descubre la magia del café en su origen con una experiencia única que destaca la rica tradición y cultura de Kimbirí. Disfruta de un día lleno de degustaciones, actividades culturales y mucho más.' />
              </div>
            </div>
            <div className='col'>
              <div className='list-group'>

                <MyModal imagen={imagen4} titulo='Feria TriangulosP' etiqueta={etiqueta15} info='¡No te pierdas la Feria TriángulosP, donde la creatividad, el café y la diversión se encuentran! 🔺🎉☕' precio='Gratuito' desc='Qué encontrarás en la feria:

☕ Zona de Cafés: Descubre una variedad de cafés gourmet y locales, con degustaciones y charlas sobre el arte del café.
🛍️ Stands: Productos exclusivos, artesanías y mucho más.
🎨 Talleres Creativos: Participa en actividades y demostraciones en vivo.
🎶 Entretenimiento: Música, espectáculos y actividades para toda la familia.
🍔 Gastronomía: Deliciosos alimentos y bebidas para todos los gustos.'/>
                <MyModal imagen={imagen6} titulo='XX Festival del Café' etiqueta={etiqueta50} info='¡No te pierdas el XX Festival del Café y celebra con nosotros el arte y la pasión por el café! ☕🎉' precio='Gratuito' desc='¡Celebra con nosotros el XX Festival del Café! Únete a una celebración especial dedicada a la cultura del café en su vigésima edición. Prepárate para un día lleno de aromas irresistibles, sabores exquisitos y experiencias únicas.'/>
              </div>
            </div>
          </div>

        </div>
        <div className="pie">.</div>
        
    </div>
  )
}
