import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from './reducers'

const FoodContext = createContext()

export function useFoodContext() {
    return useContext(FoodContext)
}

const initialState = {
    foodItems: JSON.parse(localStorage.getItem('food-items')) || [],
    foodType: 'Delicious Food',
    deliveryTime: 0,
    sortedFoods: []
}

function FoodProvider({ children }) {
    const [foodItemsState, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        localStorage.setItem('food-items', JSON.stringify(foodItemsState.foodItems))
    }, [foodItemsState.foodItems])
    return (
        <FoodContext.Provider value={{ foodItemsState, dispatch }}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodProvider