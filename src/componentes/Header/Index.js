import React, { useContext } from 'react'
import NIKE from "../../images/Nike.jpg"
import "../../index.css"
import { NavLink } from "react-router-dom"
import "boxicons"
import { DataContext } from '../../Context/DataProvider'


// TOBAR
const Header = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    const toggleMenu = () => {
        setMenu(!menu)
    }

  return (
    <header>
        <NavLink to="/">
            <div className='logo'>
                <img src={NIKE} width="150px"/>
            </div>
        </NavLink>
        <ul>
            <li>
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/Productos">Productos</NavLink>
            </li>
        </ul>
        <div className='cart' onClick={toggleMenu}>
            <box-icon name="cart"></box-icon>
            <span className='item_total'>{carrito.length}</span>
        </div>
    </header>
  )
}

export default Header


