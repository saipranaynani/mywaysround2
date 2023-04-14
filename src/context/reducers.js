
export function reducer(state, action){
    switch(action.type){
        case 'ADD_FOOD':
            return {
                ...state, 
                foodItems: [...state.foodItems, action.payload]
            }
        case 'SORT':
            const {foodItems, foodType, deliveryTime} = state
            let tempFood = [...foodItems]
            if(foodType !== 'Delicious Food'){
                tempFood.filter(food => food.foodType === action.payload)
            }
            if(deliveryTime !== 0){
                tempFood.filter(food => food.deliveryTime <= action.payload)
            }
            return {
                ...state,
                sortedFoods: tempFood
            }
        default:
            return state
    }
}