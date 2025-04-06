import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className="nav-items">
          <li><a href="#" className="nav-link">Home</a></li>

          <li className="nav-item dropdown">
            <span className="nav-link">About Us</span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">Our History</li>
              <li className="dropdown-item">Our Mission</li>
              <li className="dropdown-item">Our Team</li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link">Academics</span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <span>Programmes</span>
                <ul className="submenu">
                  <li className="submenu-item">Undergraduate</li>
                  <li className="submenu-item">Postgraduate</li>
                </ul>
              </li>
              <li className="dropdown-item">Curriculum</li>
              <li className="dropdown-item">Departments</li>
              <li className="dropdown-item">Schedules</li>
              <li className="dropdown-item">Faculty</li>
            </ul>
          </li>

          <li><a href="#" className="nav-link">Program Outcomes</a></li>
          <li><a href="#" className="nav-link">Admission Guide</a></li>
          <li><a href="#" className="nav-link">FAQs</a></li>
          <li><a href="#" className="nav-link">Online Admission</a></li>
          <li><a href="#" className="nav-link">Students' Portal</a></li>
          <li><a href="#" className="nav-link">Contact Us</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="mobile-nav-items">
          <li><a href="#">Home</a></li>

          <li>
            <div onClick={() => toggleDropdown('about')} className="mobile-nav-link">About Us</div>
            {activeDropdown === 'about' && (
              <ul className="mobile-dropdown-menu">
                <li>Our History</li>
                <li>Our Mission</li>
                <li>Our Team</li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => toggleDropdown('academics')} className="mobile-nav-link">Academics</div>
            {activeDropdown === 'academics' && (
              <ul className="mobile-dropdown-menu">
                <li>
                  <div onClick={() => toggleDropdown('programmes')} className="mobile-nav-link">Programmes</div>
                  {activeDropdown === 'programmes' && (
                    <ul className="mobile-submenu">
                      <li>Undergraduate</li>
                      <li>Postgraduate</li>
                    </ul>
                  )}
                </li>
                <li>Curriculum</li>
                <li>Departments</li>
                <li>Schedules</li>
                <li>Faculty</li>
              </ul>
            )}
          </li>

          <li><a href="#">Program Outcomes</a></li>
          <li><a href="#">Admission Guide</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Online Admission</a></li>
          <li><a href="#">Students' Portal</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
