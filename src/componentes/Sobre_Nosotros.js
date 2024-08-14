import React from 'react'
import logo from './imagenes/MainLogo.png'
import { Menu } from './menu.js';
import { Cabecera } from './cabecera.js';
import { Pie } from './pie.js';
import './Sobre_Nosotros.css'
import taza from './imagenes/Cafe_info.jpg'

export const Sobre_Nosotros = () => {
  return (
    <div>
        <div class='body_Sob'>
            <Cabecera/>
            <Menu/>
            <div class='container' >
                <div class='row'>
                    <div class='col ' id='Marca'>
                        <h1 id='titulo-1'>COFFEE & DREAMS </h1>
                        <h2>Un Sueño Hecho Realidad</h2>
                        <p>En COFFEE & DREAMS, valoramos la autenticidad y la calidad. Nos esforzamos por ofrecerte un menú diverso que incluye desde clásicos como espresso y capuchino hasta creaciones innovadoras que despiertan tu curiosidad. Nuestro espacio está diseñado para ser un refugio urbano, ideal para disfrutar de una conversación animada, trabajar en un proyecto o simplemente relajarte con un buen libro.</p>
                    </div>
                    <div class='col justify-content-center d-flex' id='Marca'>
                        <img src={logo} alt="logo" height={'270px'} />
                    </div>
                </div>

            </div>
            <div class='container' >
                <div class='row'>
                    <div class='col ' id='inf_Sbr'>
                        <h2 id='titulo-1'>Nuestra Filosofía</h2>
                        <p>Somos una cafetería apasionada por el arte del café. Cada taza de COFFEE & DREAMS es el resultado de una cuidadosa selección de granos de café de alta calidad, preparados con técnicas expertas para ofrecerte el mejor sabor en cada sorbo. Creemos en la magia de un buen café y en el poder de compartir momentos especiales en un ambiente acogedor.</p>
                    </div>
                </div>
                <div class='row'>
                    <div class='col justify-content-center d-flex' id='Marca'>
                        <img src={taza} alt="logo" height={'270px'} />
                    </div>
                    <div class='col ' id='Marca' >
                        <h2 id='titulo-1'>¿Quiénes Somos?</h2>
                        <p>Somos una cafetería apasionada por el arte del café. Cada taza de COFFEE & DREAMS es el resultado de una cuidadosa selección de granos de café de alta calidad, preparados con técnicas expertas para ofrecerte el mejor sabor en cada sorbo. Creemos en la magia de un buen café y en el poder de compartir momentos especiales en un ambiente acogedor.</p>
                    </div>
                </div>
                <div id='Marca'>
                    <h2 id='titulo-1'>Visítanos</h2>
                    <p>Descubre el sabor de COFFEE & DREAMS y permite que cada visita sea un pequeño escape de la rutina diaria. Te esperamos con los brazos abiertos para compartir juntos la magia de un buen café y momentos memorables.</p>
                    <div class='justify-content-center d-flex'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.348382689113!2d-78.49857459548446!3d-0.2019046284725515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses-419!2sec!4v1722133984514!5m2!1ses-419!2sec" width="600" height="450" ></iframe></div>
                    <br></br><p>Dirección: [Av. Ladrón de Guevara E11-253, Quito 170143]</p>
                    <br></br><p>Horario: [Todos los dias 8:00h-22:00h]</p>
                    <br></br><p>Siguenos en nuestras Redes Sociales</p>
                </div>
            </div>
            <Pie/>
        </div>
            
    </div>
  )
}
