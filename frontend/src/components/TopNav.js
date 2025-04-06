import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaMosque } from 'react-icons/fa'


const TopNav = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatFullDate = (date) =>
    date.toLocaleString('en-US', {
      weekday: 'long',         // Sunday
      month: 'short',          // Apr
      day: 'numeric',          // 6
      year: 'numeric',         // 2025
      hour: '2-digit',         // 10
      minute: '2-digit',       // 42
      second: '2-digit',       // 25
      hour12: true,            // AM/PM format
      timeZoneName: 'short'    // CDT
    })

  return (
    <div className="top-nav">
      <span className="greeting">
  <FaMosque className="greeting-icon" />
  As-salamu alaykum
</span>


      <span>{formatFullDate(time)}</span>

      <div className="social-icons">
        <a href="https://facebook.com" className='icon' target="_blank" rel="noopener noreferrer">
          <FaFacebookF  />
        </a>
        <a href="https://twitter.com" className='icon' target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" className='icon' target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}

export default TopNav
