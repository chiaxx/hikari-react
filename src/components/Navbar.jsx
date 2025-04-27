import React, { useState, useEffect} from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import { NavLink, Link} from 'react-router-dom'
import { toggleStatusTab } from '../stores/cart'
import logo from "../assets/img/logo.png"
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg'


const Navbar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      setTotalQuantity(total);
  }, [carts])
  const handleOpenTabCart = () => {
      dispatch(toggleStatusTab());
  }

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
        <li><NavLink onClick={handleOpenTabCart}>Cart (<span>{totalQuantity}</span>)</NavLink></li>
       </ul>
    </nav>

  )

}


export default Navbar




