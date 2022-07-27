import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductosLista from './productos/index';
import Inicio from './inicio';
import ProductoDetalles from './productos/ProductoDetalles';

const Paginas = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductosLista/>} />
        <Route path="/producto/:id" element={<ProductoDetalles/>} />
      </Routes>
    </div>
  )
}

export default Paginas