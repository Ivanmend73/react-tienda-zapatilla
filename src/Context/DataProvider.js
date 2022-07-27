// LO QUE USAREMMOS PARA CREAR EL CONTEXT
import React,{createContext, useState, useEffect } from "react";
import Data from "../Data"

// DataContext es nuextro context creado
export const DataContext = createContext();

// Creamos todo el context
export const DataProvider = (props) => {
  // El estado donde guardara el array de informacion de zapatillas
  const [productos, setProductos] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0)

  // Guardamos el producto de zapatillas
  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProductos(producto)
      } else {
        setProductos([])
      }
  },[])

  const addCarrito = (id) => {
    const check = carrito.every(item =>{
      return item.id !== id;
    })
    if(check) {
      const data = productos.filter(producto => {
        return producto.id === id;
      })
      setCarrito([...carrito, ...data])
    }else{
      alert("El producto se ha añadido anteriormente")
    }
  }    

  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
    if(dataCarrito) {
      setCarrito(dataCarrito)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('dataCarrito',JSON.stringify(carrito))
  },[carrito])

  useEffect(() =>{
    const getTotal = () => {
      const result = carrito.reduce((prev, item) => {
        return prev + (item.price * item.cantidad)
      }, 0)
      setTotal(result)
    }
    getTotal()
  },[carrito])


  // NECESARIO ES CONTEXT PARA PODER RENDERIZAR EL ARRAY DE ZAPATILLAS
  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal]
  }

  return (
    <DataContext.Provider value={value} >
      {props.children}
    </DataContext.Provider>
  )
}






