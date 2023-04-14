import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { useFoodContext } from '../context/FoodContext'
import FoodType from '../components/FoodType'
import Input from '../components/Input'

function Home() {
  const { foodItemsState, dispatch } = useFoodContext()
  const [foodType, setFoodType] = useState('Delicious Food')
  const [deliveryTime, SetDeliveryTime] = useState(0)

  function handleFoodType(e){
    setFoodType(e.target.value)
    dispatch({type: 'SORT', payload: foodType})
  }

  function handleDeliveryTime(e){
    SetDeliveryTime(e.target.value)
    dispatch({type: 'SORT', payload: deliveryTime})
  }
  
  return (
    <div className="home">
      <NavBar />
      <div className="home-container">
        <div className="sort-container">
          <p className="result">Resluts - {foodItemsState.foodItems.length}</p>
          <FoodType onInputChange={handleFoodType}/>
          <Input labelName={'Max Delivery Time'} onInputChange={handleDeliveryTime} value={deliveryTime}/>
        </div>
        <div className="foodItemsContainer">
          {
            foodItemsState.foodItems.map((food, i) => (
              <div className="foodcard" key={i}>
                <h2 className="foodName">{food.foodName}</h2>
                <p className="footType">{food.foodType}</p>
                <p className="deliveryTime">{food.deliveryTime} min</p>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Home