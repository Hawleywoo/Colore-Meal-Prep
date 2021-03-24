import React, { useState } from 'react'
import OrderForm from './OrderForm'

const sent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum quam lectus, bibendum elementum arcu dignissim a. Vestibulum lectus nisi, eleifend eu molestie in, venenatis sit amet nunc. Donec commodo lacus vulputate justo suscipit porta. Vivamus erat libero, eleifend nec egestas quis, sodales et turpis. Donec a pretium purus. Nam orci odio, semper ac tincidunt a, interdum quis sem. Ut semper posuere mauris, volutpat cursus nisi hendrerit id. Praesent sed sapien ut orci euismod mattis. Cras vehicula varius lorem, et porta erat sagittis id."

function Order() {
    const [lowCarb, setlowCarb] = useState(false)

    const handleLowCarb = () => {
        console.log(lowCarb)
        setlowCarb(!lowCarb)
    }

    return (
        <div className="order" >
            <div className="order__desc">
                <div className="order__desc--content">
                    <h1>Order Meals</h1>
                    <p>{sent}</p>
                    
                </div>
            </div>
            <div className="order__container">
                <h3>We have two options if you prefer low carb plan select.. </h3>
                <button className="button" onClick={handleLowCarb} >{lowCarb ? 'Regular Carb?' : 'Low Carb'}</button>
                <OrderForm lowCarb={lowCarb} />
            </div>
        </div>
    )
}

export default Order
