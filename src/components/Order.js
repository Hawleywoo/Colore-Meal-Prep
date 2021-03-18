import React, { useState } from 'react'
import OrderForm from './OrderForm'

function Order() {
    const [lowCarb, setlowCarb] = useState(false)

    const handleLowCarb = () => {
        console.log(lowCarb)
        setlowCarb(!lowCarb)
    }

    return (
        <div className="order" >
            <button className="button" onClick={handleLowCarb} >Low Carb</button>
            <OrderForm lowCarb={lowCarb} />
        </div>
    )
}

export default Order
