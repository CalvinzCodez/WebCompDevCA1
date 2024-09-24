import React, { useState } from 'react';
import { hotdrinks } from '../../assets/menuItems/hotdrinks';
import MenuOptions from '../MenuOptions';
import OptionPage from './optionPage';
import '../styleSheets/addPage.css';
import '../../App.css';
import Tea from '../../assets/images/Tea.jpg'
import Coffee from '../../assets/images/Coffee.jpg'
import HotChoclate from '../../assets/images/HotChoclate.jpg'
import Latte from '../../assets/images/Latte.jpg'
import Frappe from '../../assets/images/Frappe.jpg'

const AddHotDrink = () => {
  // Initialize variables imputs
  const [drink, setDrink] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    poster: ''
  });

  // Event handler for input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDrink({ ...drink, [name]: value });
  };

  // Event handler for submitting form 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate if price is a non-negative Float
    const parsedPrice = parseFloat(drink.price, 10);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      alert('Price must be a non-negative integer.');
      return;
    }
    // Creates a new drink object and adds it to the cold drinks array
    const newDrink = { ...drink, id: hotdrinks.length + 1, price: parseInt(drink.price) };
    hotdrinks.push(newDrink);
    console.log('Hot drink added:', newDrink);
    // Resets form inputs after submission
    setDrink({
      id: '',
      title: '',
      price: '',
      description: '',
      poster: ''
    });
  };

  // Event handler for selecting drink images
  const handleImageChange = (e) => {
    const selectedImage = e.target.value;
    setDrink({ ...drink, poster: selectedImage });
  };

  // Renders the form and other components
  return (
    <div>
      <h2 className='h2hot'>Add Hot Drink</h2>
      <form onSubmit={handleSubmit}>
        {/* Input for drink title */}
        <label>
          <input type="text" name="title" placeholder="Title" maxLength="15" value={drink.title} onChange={handleInputChange} required />
        </label>
        <br />
        {/* Input for drink price */}
        <label>
          <input type="number" name="price" max='20' min='1' placeholder="Price" step="0.50" value={drink.price} onChange={handleInputChange} required />
        </label>
        <br />
        {/* Input for drink description */}
        <label>
          <textarea name="description" value={drink.description} placeholder="Description" maxLength="30" onChange={handleInputChange} required />
        </label>
        <br />
        {/* Dropdown for selecting drink image */}
        <label>
          <select name="poster" onChange={handleImageChange} required>
            <option value="">Select an image</option>
            <option value={Tea}>Tea</option>
            <option value={Coffee}>Coffee</option>
            <option value={HotChoclate}>Hot Choclate</option>
            <option value={Latte}>Latte</option>
            <option value={Frappe}>Frappe</option>
          </select>
        </label>
        <br />
        {/* Button to submit the form */}
        <div className='Add'>
          <button type="submit">Add To Menu</button>
        </div>
      </form>
      {/* Render OptionPage component */}
      <OptionPage />
      {/* Render MenuOptions component */}
      <MenuOptions />
    </div>

  );
};

export default AddHotDrink;
