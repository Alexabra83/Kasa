import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


import "../styles/Collapse.css"
import { useState } from 'react'

function Collapse({title, children}) {
  const [shouldShow, setShouldShow] = useState(false)
  function toggleCollapse(){
    setShouldShow(!shouldShow)
  }
  return (
    <div className="collapse">
      <header className='collapse-header'>
        <h3>{title}</h3>
        <button onClick={toggleCollapse}><FontAwesomeIcon icon={shouldShow ?faChevronUp: faChevronDown } /></button>
      </header>
      {shouldShow && (
        <div className="collapse-content">
        {children}
      </div>
      )}
      

    </div>
  )
}

export default Collapse