import React, { useState, useEffect } from "react";
import '../../App.css';
import '../styleSheets/menuStyle.css'
import { hotdrinks } from "../../assets/menuItems/hotdrinks";
import { coldDrinks } from '../../assets/menuItems/coldDrinks';
import { foodItems } from "../../assets/menuItems/foodItems";

export const HomeScreenOptions = () => {
  // State variables to manage indices of hot drinks, cold drinks, and food items
  const [hotDrinkIndex, setHotDrinkIndex] = useState(0);
  const [coldDrinkIndex, setColdDrinkIndex] = useState(0);
  const [foodItemIndex, setFoodItemIndex] = useState(0);
  // State variable to control fade effect
  const [fadeIn, setFadeIn] = useState(false);

  // Style for fading effect
  const listItemStyles = {
    opacity: fadeIn ? 1 : 0, // Set opacity based on fadeIn state
  };

  useEffect(() => {
    // Set fade effect when changing items
    setFadeIn(false);
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 50); // Delay the fadeIn effect slightly to ensure proper transition

    const hotDrinkInterval = setInterval(() => {
      setHotDrinkIndex((prevIndex) => (prevIndex + 1) % hotdrinks.length);
    }, 4000); // Change hot drinks every 4 seconds

    const coldDrinkInterval = setInterval(() => {
      setColdDrinkIndex((prevIndex) => (prevIndex + 1) % coldDrinks.length);
    }, 4000); // Change cold drinks every 4 seconds

    const foodItemInterval = setInterval(() => {
      setFoodItemIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    }, 4000); // Change food items every 4 seconds

    // Clean up intervals when component unmounts
    return () => {
      clearTimeout(timeout);
      clearInterval(hotDrinkInterval);
      clearInterval(coldDrinkInterval);
      clearInterval(foodItemInterval);
    };
  }, []); // Empty dependency array makes sure that useEffect runs once after initial render

  // Displays the rotating options
  return (
    <ul className="listStyles">
      <div>
        <p className="Title">Hot Drinks</p>
        <br />
        <li className="fadingItemStyles" style={listItemStyles}>
          {/* Display hot drink details */}
          Title: {hotdrinks[hotDrinkIndex].title}<br />
          Price: €{hotdrinks[hotDrinkIndex].price}<br />
          Description: {hotdrinks[hotDrinkIndex].description}<br />
          <img src={hotdrinks[hotDrinkIndex].poster} alt={hotdrinks[hotDrinkIndex].title} className="imageStyles" />
        </li>
      </div>
      <div>
        <p className="Title">Cold Drinks</p>
        <br />
        <li className="fadingItemStyles" style={listItemStyles}>
          {/* Display cold drink details */}
          Title: {coldDrinks[coldDrinkIndex].title}<br />
          Price: €{coldDrinks[coldDrinkIndex].price}<br />
          Description: {coldDrinks[coldDrinkIndex].description}<br />
          <img src={coldDrinks[coldDrinkIndex].poster} alt={coldDrinks[coldDrinkIndex].title} className="imageStyles" />
        </li>
      </div>
      <div>
        <p className="Title">Food</p>
        <br />
        <li className="fadingItemStyles" style={listItemStyles}>
          {/* Display food item details */}
          Title: {foodItems[foodItemIndex].title}<br />
          Price: €{foodItems[foodItemIndex].price}<br />
          Description: {foodItems[foodItemIndex].description}<br />
          <img src={foodItems[foodItemIndex].poster} alt={foodItems[foodItemIndex].title} className="imageStyles" />
        </li>
      </div>
    </ul>
  );
};
