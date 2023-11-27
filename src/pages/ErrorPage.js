import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../styles/ErrorPage.css"

function ErrorPage() {
  return (
    <div>
      <Navbar />
      <div className='error'>
        <span>404</span>
        <h4>Oups! La page que vous demandez n'existe pas.</h4>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage