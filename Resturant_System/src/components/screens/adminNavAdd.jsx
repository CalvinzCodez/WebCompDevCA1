import React from "react";
import '../styleSheets/buttons.css';
import { useNavigate } from 'react-router-dom';

export const AdminNavAdd = () => {
    // useNavigate hook allows for navigation to different pages
    const navigate = useNavigate();

    return (
        <div className="add">
            {/* Button to navigate to the "/addHotDrinks" route */}
            <button onClick={() => navigate("/addHotDrinks")}>Add Hot Drink</button>
            {/* Button to navigate to the "/addColdDrinks" route */}
            <button onClick={() => navigate("/addColdDrinks")}>Add Cold Drink</button>
            {/* Button to navigate to the "/addFoodItems" route */}
            <button onClick={() => navigate("/addFoodItems")}>Add Food Item</button>
        </div>
    );
}
