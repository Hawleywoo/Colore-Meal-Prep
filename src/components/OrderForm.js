import React from 'react'

function OrderForm({ lowCarb }) {
    return (
            <form className="order__form">
                <label>Number of Meals per Week</label>
                <select>
                    <option>5</option>
                    <option>7</option>
                    <option>14</option>
                    <option>21</option>
                </select>
                <label>Meal Size</label>
                <select>
                    <option>5</option>
                    <option>7</option>
                    <option>14</option>
                    <option>21</option>
                    <option></option>
                </select>
                <label>Type of Protein</label>
                <select>
                    <option>Beef</option>
                    <option>Chicken</option>
                    <option>Pork</option>
                </select>
                {lowCarb ? 
                    null :
                    <>
                        <label> Type of Carb</label>
                        <select>
                            <option>Beef</option>
                            <option>Chicken</option>
                            <option>Pork</option>
                        </select>
                    </>
                }
                <label>Type of Veggie</label>
                <select>
                    <option>Beef</option>
                    <option>Chicken</option>
                    <option>Pork</option>
                </select>
                <input placeholder="" type='submit' />
            </form>
    )
}

export default OrderForm
