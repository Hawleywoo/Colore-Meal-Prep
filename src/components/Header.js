import React from 'react'
import NavBar from './NavBar'

function Header() {
    return (
        <div className="header__wrap" >
            <header className="header">
                <div className="header__logo" ><span>Logo</span></div>
                <NavBar />
            </header>

        </div>
    )
}

export default Header

