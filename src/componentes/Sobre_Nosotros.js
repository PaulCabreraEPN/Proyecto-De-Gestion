import React from 'react'
import logo from './imagenes/MainLogo.png'
import { Menu } from './menu.js';
import { Cabecera } from './cabecera.js';
import { Pie } from './pie.js';
import './Sobre_Nosotros.css'
import imagen1 from './imagenes/imagen2.jpeg'; 
import imagen2 from './imagenes/imagen3.webp'; 

export const Sobre_Nosotros = () => {
  return (
    <div>
        <div class='body_Sob'>
            <Cabecera/>
            <Menu/>
            <div class='container' >
                <div class='row'>
                    <div class='col ' id='Marca'>
                        <h1 id='titulo-1'>SABORES DE ECUADOR</h1>
                        <h2>Una plataforma que difunde el café ecuatoriano</h2>
                        <p>Innovación, conexión y tradición son las tres palabras que nos definen. En nuestra plataforma, el café ecuatoriano nunca ha estado tan expuesto ni tan valorizado. Nuestra misión es apoyar y promover productos nacionales, facilitando su expansión en el mercado. Creemos en el potencial de cada grano cultivado en la tierra ecuatoriana  y en el impacto positivo que puede tener en nuestra comunidad.</p>
                    </div>
                    <div class='col justify-content-center d-flex' id='Marca'>
                        <img src={imagen1} alt="logo" height={'270px'} />
                    </div>
                </div>

            </div>
            <div class='container' >
                <div class='row'>
                    <div class='col ' id='inf_Sbr'>
                        <h2 id='titulo-1'>Nuestra Filosofía</h2>
                        <p> Cada taza de café con producto nacional es una experiencia extraordinaria, elaborada con esfuerzo y dedicación por mujeres y hombres trabajadores. Disfruta de un café que refleja el compromiso con una cultura llena de tradición, valores y sabor., apoyando al mismo tiempo a los productores locales que cultivan con pasión y esmero.</p>
                    </div>
                </div>
                <div class='row'>
                    <div class='col justify-content-center d-flex' id='Marca'>
                        <img src={imagen2} alt="logo" height={'270px'} />
                    </div>
                    <div class='col ' id='Marca' >
                        <h2 id='titulo-1'>¿Quiénes Somos?</h2>
                        <p>Somos una plataforma digital innovadora diseñada para revitalizar la industria cafetera ecuatoriana. Conectamos directamente a los productores de café con compradores a nivel nacional, eliminando intermediarios, asegurando mejores precios para los agricultores. Creamos una relación cercana con cada marca cafetera, celebrando la riqueza y diversidad de nuestro café.</p>
                    </div>
                </div>
                
            </div>
            <Pie/>
        </div>
            
    </div>
  )
}
