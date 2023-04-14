import { useRef, useState } from "react";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import FoodType from "../components/FoodType";
import { useFoodContext } from "../context/FoodContext";
import { useNavigate } from "react-router-dom";

function AddFood() {
    const [foodName, setFoodName] = useState('')
    const [foodType, setFoodType] = useState('Delicious Food')
    const [deliveryTime, SetDeliveryTime] = useState(0)
    const { dispatch } = useFoodContext()
    const navigate = useNavigate()

    function handleFoodType(e) {
        setFoodType(e.target.value)
    }

    function handleFoodName(e){
        setFoodName(e.target.value)
    }

    function handleDeliveryTime(e) {
        SetDeliveryTime(e.target.value)
    }

    function handleAddFood(e) {
        e.preventDefault();

        const newFoodItem = {
            foodName: foodName,
            foodType: foodType,
            deliveryTime: deliveryTime,
        };
        dispatch({ type: 'ADD_FOOD', payload: newFoodItem })
        setFoodName('')
        setFoodType('Delicious Food')
        SetDeliveryTime(0)
        navigate('/')
    }
    return (
        <>
            <NavBar />
            <div className="addFood">
                <div >
                    <form className="addFoodcontainer" onSubmit={handleAddFood}>
                        <Input labelName={"Food Name"} value={foodName} onInputChange={handleFoodName} />
                        <FoodType onInputChange={handleFoodType} />
                        <Input labelName={"Max Delivery Time"} value={deliveryTime} onInputChange={handleDeliveryTime} />
                        <button className="addFood-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddFood;
