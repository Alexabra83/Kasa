import React from 'react'
import "../styles/Footer.css"
import logo from "../assets/logoFooter.png"

function Footer() {
  return (
		<footer className='footer'>
			<div>
			<img src={logo} alt="Kasa" />
			</div>
			<div>
			<p>© 2020 Kasa. All rights reserved</p>
			</div>
		</footer>
	)
}

export default Footer