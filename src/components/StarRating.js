import "../styles/StarRating.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {
        ["", "", "", "", ""].map((_, index) => {  //Affichage du nombres d'étoiles de chaque logement
          if (index + 1 <= rating) {
            return <FontAwesomeIcon icon={faStar} color="#FF6060" className="star" />
          } else {
            return <FontAwesomeIcon icon={faStar} color="#F0F0F0" className="star" />
          }
        })
      }
    </div>

  )
}

export default StarRating;