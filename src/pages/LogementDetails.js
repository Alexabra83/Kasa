import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import records from "../datas/logements.json"
import { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
import Collapse from "../components/Collapse";
import "../styles/LogementDetails.css"
import Main from "../components/Main";
import Gallery from "../components/Gallery";

function LogementDetails() {
  const navigate = useNavigate();// récupère l'ID de l'URL
  const { id } = useParams()
  const [logement, setLogement] = useState({
    pictures: [], host: {}, equipments: [], tags: []
  })

  useEffect(() => {
    const logement_ = records.find((element) => element.id === id);// cherche l'id dans le fichier logements.json
    if (!logement_) {
      navigate("/logement-non-trouve"); //conduit l'utilisateur vers la page d'erreur
    } else {
      setLogement(logement_)
    }
  }, [id, navigate])

  return (
    <div className="logementdetail">
      <Navbar />
      <Main>
        <Gallery logement={logement} />
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