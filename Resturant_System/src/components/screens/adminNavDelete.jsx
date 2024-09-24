import React from "react";
import '../styleSheets/buttons.css';
import { useNavigate } from 'react-router-dom';

export const AdminNavDelete = () => {
    // useNavigate hook allows for navigation to different pages
    const navigate = useNavigate();

    return (
        <div className="delete">
            {/* Button to navigate to the "/deleteHotDrinks" route */}
            <button onClick={() => navigate("/deleteHotDrinks")}>Delete Hot Drink</button>
            {/* Button to navigate to the "/deleteColdDrinks" route */}
            <button onClick={() => navigate("/deleteColdDrinks")}>Delete Cold Drink</button>
            {/* Button to navigate to the "/deleteFoodItems" route */}
            <button onClick={() => navigate("/deleteFoodItems")}>Delete Food Item</button>
        </div>
    );
}
