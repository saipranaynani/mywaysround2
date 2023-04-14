import React from 'react'

function FoodType({onInputChange}) {

    return (
        <div className="foodType">
            <label htmlFor="foodType">Food Type</label>
            <select id="foodType" onChange={(e) => onInputChange(e.target.value)}>
                <option value="Delicious Food">Delicious Food</option>
                <option value="Nutricious Food">Nutricious Food</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Beverages">Beverages</option>
                <option value="Desserts">Desserts</option>
            </select>
        </div>
    )
}

export default FoodType