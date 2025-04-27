import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import CartTab from './cartTab'
import { useSelector } from 'react-redux'


const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div>
        <main>
            <Navbar/>
            <Outlet/>
        </main>
        <CartTab/>
    </div>
  )
}

export default Layout