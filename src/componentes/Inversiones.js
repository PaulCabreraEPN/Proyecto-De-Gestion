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
        Inversiones
        <Pie />
    </div>
  )
}
