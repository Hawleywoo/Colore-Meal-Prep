import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function NavBar() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="header__menu">
            <div className={`header__menu--options${open ? '--open' : ''}`}>
                <a>Order</a>
                <a>About Us</a>
            </div>
            <div className="header__menu--button" onClick={handleClick}><FaBars /></div>
        </div>
    )
}

export default NavBar
