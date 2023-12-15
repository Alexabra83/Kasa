import React from 'react'
import "../styles/Main.css"

function Main(props) {// composant qui gère la marge gauche et droite des composants, sauf footer et navbar
  const children = props.children;
  return (
    <div className='main'>{children}</div>
  )
}

export default Main