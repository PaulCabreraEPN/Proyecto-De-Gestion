import React from 'react'
import './Inversiones.css'
import { Cabecera } from './cabecera.js';
import { Menu } from './menu.js';
import { Pie } from './pie.js';

export const Inversiones = () => {
  return (
    <div className='Inversiones'>
        <Cabecera />
        <Menu />
        <div className='bloque'>
            <h2>Paso a Paso para Invertir en Marcas de Café en Sabores de Ecuador</h2>
            <ul>
                
                <li>
                    <h3>Acceso a la Plataforma:</h3>
                    <ul>
                <li>
                    <b>Paso 1:</b> Abre tu navegador y visita el sitio web de Sabores de Ecuador.
                </li>
                <li>
                    <b>Paso 2:</b> Inicia sesión en tu cuenta o regístrate si aún no tienes una cuenta. Para registrarte, necesitarás proporcionar tu información personal, como nombre, correo electrónico y una contraseña segura.
                </li>
                    </ul>
                </li>
                    <br></br>
                <li>
                    <h3>Navegar a la Sección de Inversiones:</h3>
                    <ul>
                <li>
                    <b>Paso 3:</b> Una vez que hayas iniciado sesión, busca y selecciona la opción que dice “Marcas” en el menú principal de la plataforma.
                </li>
                    </ul>
                </li>
                <br></br>

                <li>
                    <h3>Explorar Marcas de Café:</h3>
                    <ul>
                <li>
                    <b>Paso 4:</b> En la sección de Marcas, verás una lista de marcas de café disponibles para invertir. Puedes filtrar o buscar marcas específicas utilizando las opciones de búsqueda y filtrado disponibles.
                </li>
                    </ul>
                </li>
                <br></br>

                <li>
                    <h3>Seleccionar una Marca:</h3>
                    <ul>
                <li>
                    <b>Paso 5:</b>  Haz clic en el perfil de la marca de café que te interesa. Esto te llevará a una página detallada sobre la marca, incluyendo información sobre su historia, producción, y los proyectos actuales.</li>
                    </ul>
                </li>

                <br></br>

                <li>
                    <h3>Revisar Oportunidades de Inversión:</h3>
                    <ul>
                <li>
                    <b>Paso 6:</b> En el perfil de la marca, busca la sección “Oportunidades de Inversión” o algo similar. Aquí encontrarás detalles sobre los métodos de inversión disponibles, como la compra de acciones, participación en proyectos específicos, o inversiones directas en la producción.</li>
                    </ul>
                </li>

                <br></br>

                <li>
                    <h3>Revisar Oportunidades de Inversión:</h3>
                    <ul>
                <li>
                    <b>Paso 7:</b>Elige el método de inversión que prefieras. Esto puede incluir opciones como:
                    <ul>
                        <li><b>Compra de acciones: </b>Adquirir una participación en la empresa de café.</li>
                        <li><b>Inversión en proyectos específicos: </b>Financiar iniciativas concretas, como mejoras en la infraestructura o expansión.</li>
                        <li><b>Compra de productos: </b>Comprar una cantidad de café a precios preferenciales como forma de inversión.</li>
                    </ul>
                    </li>
                    </ul>
                </li>

                <br></br>

                <li>
                    <h3>Revisar Detalles de la Inversión:</h3>
                    <ul>
                <li>
                    <b>Paso 8:</b> Lee atentamente los términos y condiciones de la inversión, incluyendo los riesgos, beneficios esperados, y cualquier otra información relevante. Asegúrate de entender completamente antes de proceder.</li>
                    </ul>
                </li>

                <br></br>

                <li>
                    <h3>Realizar la Inversión:</h3>
                    <ul>
                <li>
                    <b>Paso 9:</b> Una vez que estés listo para invertir, haz clic en el botón “Invertir” o “Confirmar Inversión”. Es posible que se te pida proporcionar información adicional, como detalles de pago o confirmar tu compromiso con la inversión.</li>
                    </ul>
                </li>

                <br></br>

                <li>
                    <h3>Confirmación y Seguimiento:</h3>
                    <ul>
                <li>
                    <b>Paso 10:</b> Después de completar la inversión, recibirás una confirmación por correo electrónico o en tu perfil en la plataforma. Asegúrate de guardar esta confirmación para tus registros.</li>
                    <li>
                    <b>Paso 11:</b> Monitorea el progreso de tu inversión a través de la plataforma. Algunas plataformas proporcionan actualizaciones regulares sobre el estado de las inversiones y el desempeño de la marca.</li>

                    </ul>
                </li>

                <br></br>

                <li>
                    <h3>Soporte y Contacto:</h3>
                    <ul>
                <li>
                    <b>Paso 12:</b> Si tienes alguna pregunta o necesitas asistencia durante el proceso, contacta al soporte al cliente de Sabores de Ecuador a través de los canales proporcionados en el sitio web.</li>
                    </ul>
                </li>

                <br></br>

                <div className='Video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tzsUPO6xcDo?si=6M_1z-J6hOy5kNmZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </ul>
            Este proceso te permitirá invertir en marcas de café ecuatoriano y apoyar el crecimiento de la industria del café en el país. ¡Espero que encuentres esta guía útil!
        </div>
        <Pie />
    </div>
  )
}
