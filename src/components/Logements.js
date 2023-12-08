import React from 'react'
import { NavLink } from 'react-router-dom'
import records from "../datas/logements.json"
import "../styles/Logements.css"

function Logements() {
  return (
    <div className="logements">
      {records.map((record) => {
        const { id, cover, title } = record;
        return (
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