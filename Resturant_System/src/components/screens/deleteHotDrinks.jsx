import React, { useState } from 'react';
import '../styleSheets/buttons.css';
import '../../App.css';
import { hotdrinks } from '../../assets/menuItems/hotdrinks';
import MenuOptions from '../MenuOptions';
import OptionPage from './optionPage';

const DeleteHotDrink = () => {
  // States variable to manage the list of hot drinks
  const [list, updateList] = useState(hotdrinks);

  const handleDelete = (id) => {
    // Find the index of the hot drink with the specified ID
    const index = hotdrinks.findIndex(drink => drink.id === id);
    if (index !== -1) {
      // Remove the hot drink from the hotdrinks array
      hotdrinks.splice(index, 1);
      // Update the state to re-render the component without the deleted hot drink
      updateList([...hotdrinks]);
      console.log('Hot drink deleted with ID:', id);
    }
  };

  return (
    <div>
      <h2 className='h2hot'>Delete Hot Drink</h2>
      {/* Display the list of hot drinks */}
      <ul>
        {list.map(drink => (
          <li class="deletedItems" key={drink.id}>
            {/* Display hot drink title and price */}
            {drink.title} - ${drink.price}
            <br />
            <img src={drink.poster} alt={drink.title} className='imageStyles' />
            {/* Button to delete the hot drink */}
            <br />
            <div className='Del'>
            <button onClick={() => handleDelete(drink.id)}>Delete</button>
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

export default DeleteHotDrink;
