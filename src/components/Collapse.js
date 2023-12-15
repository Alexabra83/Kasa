import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


import "../styles/Collapse.css"
import { useState } from 'react'

function Collapse({title, children}) { // Gestion de l'ouverture et de fermeture du Collapse
  const [shouldShow, setShouldShow] = useState(false)
  function toggleCollapse(){
    setShouldShow(!shouldShow)
  }
  return (
    <div className="collapse">
      <header className='collapse-header'>
        <h3>{title}</h3>
        <button onClick={toggleCollapse}><FontAwesomeIcon icon={shouldShow ?faChevronUp: faChevronDown } /></button> {/*ouverture du collapse avec le chevron*/}
      </header>
      {shouldShow && (
        <div className="collapse-content"> {/* affiche le contenu */}
        {children}
      </div>
      )}
      

    </div>
  )
}

export default Collapse