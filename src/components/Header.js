import React from 'react'
import NavBar from './NavBar'

function Header() {
    return (
        <div className="header__wrap" >
            <header className="header">
                <div className="header__logo" ><img className="header__logo--image" src="https://images.getbento.com/accounts/fb0d891f5aff4d57adccd1ede962ae20/media/images/89530PizzeriaColore-logo.png" alt="Pizzeria Colore Logo"/></div>
                <NavBar />
            </header>

        </div>
    )
}

export default Header

