import React,{ useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/DataProvider';
import { useParams } from "react-router-dom";
import ProductoItem from './ProductoItem';
import "../../index.css"

const ProductoDetalle = () => {

    const value = useContext(DataContext);
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;

    //useState
    const [detalle, setDetalle] = useState([]);
    const params = useParams();
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState("");   
    let item = 0;

    useEffect(() => {
        productos.forEach(producto => {
          item = 0
            if((item < 6) && (producto.id == parseInt(params.id))){
                setDetalle(producto);
                setUrl()
            }
        });
    },[params.id, productos])

    useEffect(() => {
      const values = `${detalle.img1}${url}${detalle.img2}`;
      setImages(values)
    },[url, params.id])

    const handleInput = (e) => {
      const number = e.target.value.toString().padStart(2, "01");
      setUrl(number)
    }

    if(detalle.length < 1) return null

  return (
    <>
    {
     <div className='detalles'>
        <h2>{detalle.title}</h2>
        <p className='price'>${detalle.price}</p>
          <div className='grid'>
            <p className='nuevo' id="nuevo">Nuevo</p>
              <div className='size'>
                <select id="select__detalles" placeholder='Tamaño'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
            </select>
              </div>
        </div>
        <button onClick={()=>addCarrito(detalle.id)}>Anadir al carrito</button>

        {
          url ? 
          <img  
          id="img__detalle"
          src={images}
          alt={detalle.title}
          /> :
          <img  
          id="img__detalle"
          src={detalle.image}
          alt={detalle.title}
          />
        }



        <input id="input" type="range" min="1" max="36" value={url} onChange={handleInput}></input>
        <div className='description'>
          <p><b>description:</b>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements. <br/> <br/> Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.</p>
        </div>
     </div> 
    }

      <h2 className='relacionados'>Productos Relacionados</h2>
      <div className='productos' id="productos__detalles">
        {
          productos.map((producto)=>{ 
            if(item < 6 && detalle.category === producto.category) {
              item ++;
              return <ProductoItem 
              key={producto.id} 
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
              />
            }
          })
        }

      </div>
    </>
  )
}

export default ProductoDetalle