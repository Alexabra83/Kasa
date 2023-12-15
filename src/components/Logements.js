import React from 'react'
import { NavLink } from 'react-router-dom'
import records from "../datas/logements.json"
import "../styles/Logements.css"

// composant qui permet de récupérer la liste des logements et de les afficher sous forme de tableau

function Logements() {
  return (
    <div className="logements"> {/* liste la base de données */}
      {records.map((record) => {
        const { id, cover, title } = record;
        return (                              /*affiche la fiche logement sur la page d'accueil*/
          <div className="logement" key={id}>
            <NavLink to={"/logement-details/" + id}>
              <figure className='logement-figure'>
                <img src={cover} alt={title} className='logement-figure-img' />
                <figcaption className='logement-figure-figcaption'>
                  <h3 className='logement-figure-figcaption-title'>{title}</h3>
                </figcaption>
              </figure>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default Logements