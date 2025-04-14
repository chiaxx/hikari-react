import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/img/logo.png"
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>

      <div className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
      </div>

      <ul className={`navbar-links ${showNavbar ? 'show' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/manga">Manga</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar




