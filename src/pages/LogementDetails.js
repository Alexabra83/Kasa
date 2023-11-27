import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import records from "../datas/logements.json"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import StarRating from "../components/StarRating";

import "../styles/LogementDetails.css"
import Main from "../components/Main";


function LogementDetails() {
  const { id } = useParams()
  const [logement, setLogement] = useState({
    pictures: [], host: {}, equipments: [], tags: []
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setLogement(records.find((element) => element.id === id))
  }, [id])

  const slideLeft = () => {
    if (currentIndex === 0 ) {
      setCurrentIndex (logement.pictures.length -1)
    } else {
      setCurrentIndex (currentIndex -1)
    }
  }

  const slideRight = () => {
    if (currentIndex === logement.pictures.length -1 ) {
      setCurrentIndex (0)
    } else {
      setCurrentIndex (currentIndex +1)
    }
  }

  

  return (
    <div className="logementdetail">
      <Navbar />
      <Main>
        <img className="img-cover" src={logement.pictures[currentIndex]} alt="" />
        <button onClick={slideLeft}><FontAwesomeIcon icon={faEnvelope} /></button>
        <button onClick={slideRight}><FontAwesomeIcon icon={faEnvelope} /></button>
        <p>{currentIndex +1} / {logement.pictures.length}</p>

        <div className="detail-header">
          <div className="bloc-title">
            <h1>{logement.title}</h1>
            
            <h4>{logement.location}</h4>
            <ul className="ul-tags">
              {logement.tags.map((tag, index) => {
                return (
                  <li className="tags" key={index}>{tag}</li>
                )
              })}
            </ul>
          </div>

          <div className="bloc-host">
            <img alt="" src={logement.host.picture} />
            <span >{logement.host.name}</span>
          </div>

          <div className="bloc-star">
            <StarRating rating={logement.rating} />
          </div>
        </div>


        <div>
          <p>Description</p>
          <p>Profitez du charme de la vie parisienne dans un magnifique appartement.
            A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports,
            mais également de nombreux commerces. L'appartement est tout équipé,
            et possède également un parking pour ceux qui souhaitent se déplacer en voiture.</p>
        </div>
        <div>
          <p></p>
        </div>
      </Main>
      <Footer />

    </div>
  );
}

export default LogementDetails;