import React from 'react'
import Navbar from "../components/Navbar"
import Banner from '../components/Banner'
import Logements from "../componentes/Logements"
import Footer from "../components/Footer"

import "../Styles/Home.css"

function Home() {
  return (
    <div>
      <Navbar />
      <Banner>
        <div className="banner">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </Banner>
      <Logements />
      <Footer />
    </div>
  )
}

export default Home