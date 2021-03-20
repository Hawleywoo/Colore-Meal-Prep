import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className="header__menu">
            <div className={`header__menu--options${openMenu ? '--open' : ''}`}>
                <a>Order</a>
                <a>About Us</a>
            </div>
            <div className={`header__menu--button`} onClick={handleClick}>
                <div className='header__menu--button--burger'></div>
            </div>
        </div>
    )
}

export default NavBar
