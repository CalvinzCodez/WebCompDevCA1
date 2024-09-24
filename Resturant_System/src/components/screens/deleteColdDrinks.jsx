import React, { useState } from 'react';
import '../styleSheets/buttons.css';
import '../../App.css';
import { coldDrinks } from '../../assets/menuItems/coldDrinks';
import MenuOptions from '../MenuOptions';
import OptionPage from './optionPage';

const DeleteColdDrink = () => {
  // States variable to manage the list of cold drinks
  const [list, updateList] = useState(coldDrinks);

  // Event handler for deleting a cold drink by ID
  const handleDelete = (id) => {
    // Finds the index of the cold drink with the specified ID 
    const index = coldDrinks.findIndex(drink => drink.id === id);
    if (index !== -1) {
      // Removes the cold drink from the coldDrinks array
      coldDrinks.splice(index, 1);
      // Updates the state to re-render the component without the deleted cold drink
      updateList([...coldDrinks]);
      console.log('Cold drink deleted with ID:', id);
    }
  };

  return (
    <div>
      <h2 className='h2cold'>Delete Cold Drink</h2>
      {/* Display the list of cold drinks */}
      <ul>
        {list.map(drink => (
          <li className="deletedItems" key={drink.id}>
            {/* Display cold drink title and price */}
            {drink.title} - ${drink.price}
            <br />
            <img src={drink.poster} alt={drink.title} className='imageStyles' />
            {/* Button to delete the cold drink */}
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

export default DeleteColdDrink;
