import React from 'react'
import "../styles/Banner.css"

function Banner({title, img}) {
  return (
    <div className='banner'>
      <img src={img} alt="" />
      <div className='bannerfilter'></div>
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner