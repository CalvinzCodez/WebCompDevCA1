import React, { useState } from 'react';
import { coldDrinks } from '../../assets/menuItems/coldDrinks';
import MenuOptions from '../MenuOptions';
import OptionPage from './optionPage';
import '../styleSheets/addPage.css';
import '../../App.css';
import Water from '../../assets/images/Water.jpg'
import Coke from '../../assets/images/Coke.jpg'
import Pepsi from '../../assets/images/Pepsi.jpg'
import Fanta from '../../assets/images/Fanta.jpg'
import sevenUP from '../../assets/images/sevenUP.jpg'

const AddColdDrink = () => {
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
    // Validate if price is a non-negative float
    const parsedPrice = parseFloat(drink.price, 10);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      alert('Price must be a non-negative integer.');
      return;
    }

    // Creates a new drink object and adds it to the cold drinks array
    const newDrink = { ...drink, id: coldDrinks.length + 1, price: parseInt(drink.price) };
    coldDrinks.push(newDrink);
    console.log('Cold drink added:', newDrink);
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
      <h2 className='h2cold'>Add Cold Drink</h2>
      <form onSubmit={handleSubmit}>
        {/* Input for drink title */}
        <label>
          <input type="text" name="title" placeholder="Title" maxLength="15" value={drink.title} onChange={handleInputChange} required />
        </label>
        <br />
        {/* Input for drink price */}
        <label>
          <input type="number" name="price" max='20' min='1' step="0.50" placeholder="Price" value={drink.price} onChange={handleInputChange} required />
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
            <option value={Water}>Water</option>
            <option value={Coke}>Coke</option>
            <option value={Pepsi}>Pepsi</option>
            <option value={Fanta}>Fanta</option>
            <option value={sevenUP}>sevenUP</option>
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

export default AddColdDrink;
