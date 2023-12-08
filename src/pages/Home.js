import React from 'react'
import Navbar from "../components/Navbar"
import Banner from '../components/Banner'
import Logements from "../components/Logements"
import Footer from "../components/Footer"
import Main from "../components/Main"
import ImgBanner from "../assets/imgBannerAccueil.png"

import "../styles/Home.css"

function Home() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner title="Chez vous, partout et ailleurs" img={ImgBanner} />
        <Logements />
      </Main>
      <Footer />
    </div>
  )
}

export default Home