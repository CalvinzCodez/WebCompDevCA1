import React, { useState } from 'react';
import '../styleSheets/buttons.css';
import '../../App.css';
import { foodItems } from '../../assets/menuItems/foodItems';
import MenuOptions from '../MenuOptions';
import OptionPage from './optionPage';

const DeleteFoodItem = () => {
  // State variable to manage the list of food items
  const [list, updateList] = useState(foodItems);

  const handleDelete = (id) => {
    // Find the index of the food item with the specified ID
    const index = foodItems.findIndex(item => item.id === id);
    if (index !== -1) {
      // Remove the hot drink from the food items array
      foodItems.splice(index, 1);
      // Update the state to re-render the component without the deleted food item
      updateList([...foodItems]);
      console.log('Food Item deleted with ID:', id);
    }
  };

  return (
    <div>
      <h2 className='h2food'>Delete Food Items</h2>
      {/* Display the list of food items */}
      <ul>
        {list.map(item => (
          <li class="deletedItems" key={item.id}>
            {/* Display food items title and price */}
            {item.title} - ${item.price}
            <br />
            <img src={item.poster} alt={item.title} className='imageStyles' />
            {/* Button to delete the food item */}
            <br />
            <div className='Del'>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Renders the OptionPage component */}
      <OptionPage />
      {/* Renders the MenuOptions component */}
      <MenuOptions />
    </div>
  );
};

export default DeleteFoodItem;