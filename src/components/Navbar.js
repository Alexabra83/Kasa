import React from 'react'
import "../styles/Navbar.css"
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar_logo'>
        <NavLink to="/"><img src={logo} alt='Kasa' /></NavLink>
      </div>
      <ul className="nav_list">
        <li>
          <NavLink to="/" className="nav-link"><p>Acceuil</p></NavLink> {/* Lien vers la page d'acceuil */}
        </li>
        <li>
          <NavLink to="/a-propos" className="nav-link"><p>À Propos</p></NavLink> {/* Lien vers la page "A Propos" */}
        </li>
      </ul>
    </header>
  )
}

export default Navbar