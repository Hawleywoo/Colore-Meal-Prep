import React from 'react'
import Meal from './Meal'

function MyOrders() {
    return (
        <div className="dashboard__my-orders">
            <h3>Active and Previous Orders</h3>
            <div className="dashboard__my-orders--meals-container">
                <Meal />
                <Meal />
                <Meal />
                <Meal />
            </div>
        </div>
    )
}

export default MyOrders
