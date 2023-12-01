import "../styles/StarRating.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function StarRating ({rating}){
  return (
    <div className="star-rating">
      {
        ["","","","",""].map((_, index) => {
          if (index +1 <= rating ) {
            return <FontAwesomeIcon icon={faStar} color="#FF0000"/>
          } else {
            return <FontAwesomeIcon icon={faStar} color="#F0F0F0"/>
          }
}) 
      }
    </div>
  
  )
}

export default StarRating;