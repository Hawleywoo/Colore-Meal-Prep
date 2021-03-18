import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function NavBar() {
    return (
        <div className="header__menu">
            <a>Order</a>
            <a>About Us</a>
            <div><FaBars /></div>
        </div>
    )
}

export default NavBar
