import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Burger from './Burger'

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }

    return (
        <div className="header__menu">
            <div className={`header__menu--options${openMenu ? '--open' : ''}`}>
                <a>Order</a>
                <a>About Us</a>
                <a>Contact Us</a>
                <a>Login/Sign Up</a>
            </div>

            <div className={`header__menu--button`} onClick={handleClick}>
                <Burger open={openMenu} />
            </div>
        </div>
    )
}

export default NavBar
