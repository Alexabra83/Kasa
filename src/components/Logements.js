import React from 'react'
import { NavLink } from 'react-router-dom'
import records from "../datas/logements.json"
import "../styles/Logements.css"

function Logements () {
  return (
    <div className="logements">
      {records.map((record) => {
        const { id, cover, title } = record;
        return (
          <div className="logement" key={id}>
            <NavLink to={"/logement-details/" + id}>
              <img src={cover} alt={title} />
              <h3>{title}</h3>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default Logements