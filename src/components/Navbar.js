import React from 'react'
import "../styles/Navbar.css"
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar_logo'>
        <img to='/' src={logo} alt='Kasa' />
      </div>
      <NavLink>
      <ul className="nav_list">
            <li>
                <p to="/">Acceuil</p>
            </li>
            <li>
                <p to="/a-propos">A Propos</p>
            </li>
        </ul>
      </NavLink>
    </header>
  )
}

export default Navbar