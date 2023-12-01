import React from 'react'
import Navbar from "../components/Navbar"
import Banner from '../components/Banner'
import Footer from "../components/Footer"
import Main from "../components/Main"

import "../styles/About.css"

function About() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <h1>A propos</h1>
      </Main>
      <Footer />
    </div>
  );
}

export default About;