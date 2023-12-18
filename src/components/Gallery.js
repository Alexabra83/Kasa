import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import "../styles/Gallery.css"


function Gallery({ logement }) {

  const [currentIndex, setCurrentIndex] = useState(0)

  //Gestion des slides du carrousel

  const slideLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(logement.pictures.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const slideRight = () => {
    if (currentIndex === logement.pictures.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className="carousel">{/* carrousel d'images */}
      <img className="img-cover" src={logement.pictures[currentIndex]} alt="" />
      {logement.pictures.length > 1 && (
        <>
          <button className='chevronGauche' onClick={slideLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className='chevronDroit' onClick={slideRight}><FontAwesomeIcon icon={faChevronRight} /></button>
        </>
      )}

      <p className="compteurImages">{currentIndex + 1} / {logement.pictures.length}</p> {/* compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images*/}
    </div>
  )
}

export default Gallery