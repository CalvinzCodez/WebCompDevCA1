import React from "react";
import '../components/styleSheets/menuStyle.css';
import { hotdrinks } from "../assets/menuItems/hotdrinks";
import { coldDrinks } from '../assets/menuItems/coldDrinks';
import { foodItems } from "../assets/menuItems/foodItems";

const MenuOptions = () => {
  // Renders the list of hot drinks, cold drinks, and food items
  function RenderMenu() {
    return (
      <ul className='listStyles'>
        <div>
          <p className="Title">Hot Drinks</p>
          <br />
          {hotdrinks.map((element) => (
            <li key={element.id} className='listItemStyles'>
              Title: {element.title}<br />
              Price: €{element.price}<br />
              Description: {element.description}<br />
              <img src={element.poster} alt={element.title} className='imageStyles' />
            </li>
          ))}
        </div>
        <div>
          <p className="Title">Cold Drinks</p>
          <br />
          {coldDrinks.map((cold) => (
            <li key={cold.id} className='listItemStyles'>
              Title: {cold.title}<br />
              Price: €{cold.price}<br />
              Description: {cold.description}<br />
              <img src={cold.poster} alt={cold.title} className='imageStyles' />
            </li>
          ))}
        </div>
        <div>
          <p className="Title">Food</p>
          <br />
          {foodItems.map((food) => (
            <li key={food.id} className='listItemStyles'>
              Title: {food.title}<br />
              Price: €{food.price}<br />
              Description: {food.description}<br />
              <img src={food.poster} alt={food.title} className='imageStyles' />
            </li>
          ))}
        </div>
      </ul>
    );
  }

  return (
    <>
      {/* Renders the menu function from above */}
      <RenderMenu />
    </>
  );
};

export default MenuOptions;
