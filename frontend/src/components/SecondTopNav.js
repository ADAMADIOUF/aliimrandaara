import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import logo from '../assets/logo.png' 

const SecondTopNav = () => {
  return (
    <div className="second-top-nav">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Ali Imran Daara" />
      </div>

      {/* WhatsApp and Number */}
      <div className="contact">
        <FaWhatsapp className="whatsapp-icon" />
        <span>+221 77 123 45 67</span>
      </div>

      {/* Search */}
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  )
}

export default SecondTopNav
