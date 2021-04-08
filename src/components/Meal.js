import React from 'react'

function Meal() {
    return (
        <div className="dashboard__my-orders__meals-container__meal" >
            <div>
                <h3>Number of Meals: </h3>
                <p>5</p>
            </div>
            <div>
                <h3>Meals Size: </h3>
                <p>2000</p>
            </div>
            <div>
                <h3>Type of Protein</h3>
                <p>chicken</p>
            </div>
            <div>
                <h3>Type of Veggie</h3>
                <p>Broccoli</p>
            </div>
            <div>
                <h3>Low Carb</h3>
                <p></p>
            </div>
            <div>
                <h3>Active</h3>
                <p>✅</p>
            </div>
        </div>
    )
}

export default Meal
