import React, { useState } from 'react';
import { foodItems } from '../../assets/menuItems/foodItems';
import MenuOptions from '../MenuOptions';
import OptionPage from './optionPage';
import '../styleSheets/addPage.css';
import '../../App.css';
import Toast from '../../assets/images/Toast.jpg'
import Salad from '../../assets/images/Salad.jpg'
import Scone from '../../assets/images/Scone.jpg'
import Bagel from '../../assets/images/Bagel.jpg'
import Sandwich from '../../assets/images/Sandwich.jpg'



const AddFoodItem = () => {
    // Initialize variables imputs
    const [item, setItem] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        poster: ''
    });

    // Event handler for input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    // Event handler for submitting form 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate if price is a non-negative Float
        const parsedPrice = parseFloat(item.price);
        if (isNaN(parsedPrice) || parsedPrice < 0) {
            alert('Price must be a non-negative integer.');
            return;
        }

        // Creates a new food object and adds it to the food items array
        const newItem = { ...item, id: foodItems.length + 1, price: parsedPrice };
        foodItems.push(newItem);
        console.log('Food item added:', newItem);
        // Resets form inputs after submission
        setItem({
            id: '',
            title: '',
            price: '',
            description: '',
            poster: ''
        });
    };

    // Event handler for selecting food images
    const handleImageChange = (e) => {
        const selectedImage = e.target.value;
        setItem({ ...item, poster: selectedImage });
    };

    // Renders the form and other components
    return (
        <div>
            <h2 className='h2food'>Add Food Item</h2>
            <form onSubmit={handleSubmit}>
                {/* Input for food title */}
                <label>
                    <input type="text" name="title" placeholder="Title" maxLength="15" value={item.title} onChange={handleInputChange} required />
                </label>
                <br />
                {/* Input for food price */}
                <label>
                    <input type="number" name="price" max='20' min='1' step="0.50" placeholder="Price" value={item.price} onChange={handleInputChange} required />
                </label>
                <br />
                {/* Input for food description */}
                <label>
                    <textarea name="description" value={item.description} placeholder="Description" maxLength="30" onChange={handleInputChange} required />
                </label>
                <br />
                {/* Dropdown for selecting food image */}
                <label>
                    <select name="poster" onChange={handleImageChange} required>
                        <option value="">Select an image</option>
                        <option value={Toast}>Toast</option>
                        <option value={Salad}>Salad</option>
                        <option value={Scone}>Scone</option>
                        <option value={Bagel}>Bagel</option>
                        <option value={Sandwich}>Sandwich</option>
                    </select>
                </label>
                <br />
                {/* Button to submit the form */}
                <div className='Add'>
                    <button type="submit">Add To Menu</button>
                </div>            </form>
            {/* Render OptionPage component */}
            <OptionPage />
            {/* Render MenuOptions component */}
            <MenuOptions />
        </div>
    );
};

export default AddFoodItem;

