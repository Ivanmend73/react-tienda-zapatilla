import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider' 
import { Link } from 'react-router-dom';


const ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
    cantidad
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;


    //RENDERIZADO DE CARRITO
  return (
    <>
        <div className='productos'>
            <div className='producto'>
                <Link to={`/producto/${id}`}>
                    <div className='producto__img'>
                        <img src={image} alt={title} />
                    </div>
                </Link>
                <div className='producto__footer'>
                    <h1> {title} </h1>
                    <p> {category} </p>
                    <p className='price'> ${price} </p>
                </div>
                <div className='button'>
                    <button className='btn' onClick={()=> addCarrito(id)}>
                        Anadir al carrito
                    </button>
                <div>
                    <Link to={`/producto/${id}`} className='btn'>Visita</Link>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default ProductoItem