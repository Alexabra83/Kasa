import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import records from "../datas/logements.json"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import StarRating from "../components/StarRating";
import Collapse from "../components/Collapse";
import "../styles/LogementDetails.css"
import Main from "../components/Main";

function LogementDetails() {
  const navigate = useNavigate();// récupère l'ID de l'URL
  const { id } = useParams()
  const [logement, setLogement] = useState({
    pictures: [], host: {}, equipments: [], tags: []
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const logement_ = records.find((element) => element.id === id);// cherche l'id dans le fichier logements.json
    if (!logement_){
      navigate("/logement-non-trouve"); //conduit l'utilisateur vers la page d'erreur
    }else {
      setLogement(logement_)
    }
  }, [id, navigate])


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
    <div className="logementdetail">
      <Navbar />
      <Main>
        <div className="carousel">{/* carrousel d'images */}
          <img className="img-cover" src={logement.pictures[currentIndex]} alt="" />
          <button className='chevronGauche' onClick={slideLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className='chevronDroit' onClick={slideRight}><FontAwesomeIcon icon={faChevronRight} /></button>
          <p className="compteurImages">{currentIndex + 1} / {logement.pictures.length}</p> {/* compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images*/}
        </div>

        <div className="detail-header">{/* 1 - affiche le titre, l'emplacement et les tags */}
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
          <div className="host-star"> {/* 2 - Affiche le nom du propriétaireet sa photo */}
            <div className="bloc-host">
              <img alt="" src={logement.host.picture} />
              <span >{logement.host.name}</span>
            </div>

            <div className="bloc-star"> {/* étoiles évaluant le logement */}
              <StarRating rating={logement.rating} />
            </div>
          </div>
        </div>

        <div className="description-equipment"> {/* affiche la description et les équipements en collapse*/}
          <Collapse title="Description">Profitez du charme de la vie parisienne dans un magnifique appartement.
            A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports,
            mais également de nombreux commerces. L'appartement est tout équipé,
            et possède également un parking pour ceux qui souhaitent se déplacer en voiture.</Collapse>

          <Collapse title="Equipments">
            <ul>
              {logement.equipments.map((equipment, i) => {
                return (
                  <li key={i}>
                    {equipment}
                  </li>
                )
              })}
            </ul>
          </Collapse>
        </div>

      </Main>
      <Footer />

    </div>
  );
}

export default LogementDetails;