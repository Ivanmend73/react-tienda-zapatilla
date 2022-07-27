import React from 'react'
import { Link } from 'react-router-dom'
import Portada from "../../images/inicio.jpg"

// PAGINA INICIAL "/"
const Inicio = () => {
  return (
    <div className='incio'>
      <Link to="/">
        <h1 className='title'>Inicio</h1>
      </Link>
      <Link to="/productos">
        <h1 className='title' id="title2">Productos</h1>
      </Link>
      <img src={Portada} alt="Portada" id="portada"/>
    </div>
  )
}

export default Inicio