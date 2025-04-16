import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/img/logo.png"
import CartIcon from '../assets/icons/cart-shopping-solid.svg'
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
        <li><NavLink to ="/cart">Cart (<span>0</span>)</NavLink></li>
      </ul>
      {/* <div className='nav-cart'>
        <span>0</span>
        <Link to="/cart">
          <img src={CartIcon} alt=""  width='20'/>
        </Link>
      </div> */}
    </nav>
  )
}

export default Navbar




