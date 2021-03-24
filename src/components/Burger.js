import React from 'react'

function Burger({ open }) {
    return (
        <div className='burger'>
            <div className={`first${open ? '--closed' : ''}`} ></div>
            <div className={`second${open ? '--closed' : ''}`}></div>
            <div className={`third${open ? '--closed' : ''}`}></div>
        </div>
    )
}

export default Burger
