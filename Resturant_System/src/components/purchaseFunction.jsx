import React, { useState } from 'react';
import '../components/styleSheets/purchasePage.css';
import { coldDrinks } from '../assets/menuItems/coldDrinks';
import { hotdrinks } from '../assets/menuItems/hotdrinks';
import { foodItems } from '../assets/menuItems/foodItems';
import swal from 'sweetalert';


const PurchaseFunction = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const paymentOptions = ['Cash', 'Card'];


  // Function that handles item click and adds the item to the selected items list
  const handleItemClick = (item) => {
    const itemIndex = selectedItems.findIndex((selectedItem) => selectedItem.title === item.title);

    if (itemIndex !== -1) {
      // If item is already selected, update its quantity
      const updatedItems = [...selectedItems];
      updatedItems[itemIndex].quantity += 1;
      setSelectedItems(updatedItems);
    } else {
      // If item is not selected, add it to the list with quantity 1
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  // Function that handles item removal from the selected item list
  const handleItemDelete = (item) => {
    const itemIndex = selectedItems.findIndex((selectedItem) => selectedItem.title === item.title);
    if (itemIndex !== -1) {
      const updatedItems = [...selectedItems];
      // Decrease quantity by 1, or remove the item if quantity is 1
      updatedItems[itemIndex].quantity -= 1;

      if (updatedItems[itemIndex].quantity <= 0) {
        // If quantity becomes 0 or negative, remove the item from the list
        updatedItems.splice(itemIndex, 1);
      }

      setSelectedItems(updatedItems);
    }
  };

  // Function to calculate the total price of selected items
  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Function to handle payment option selection
  const handlePaymentOptionChange = (event) => {
    setSelectedPaymentOption(event.target.value);
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    if (selectedPaymentOption) {
      // Show a sweet alert with payment method and total amount
      swal({
        title: `Payment method selected: ${selectedPaymentOption}`,
        text: `Your order has been made! \nYour total is: €${calculateTotal()}`,
        icon: "success",
        // button: "Logout!",
      }).then(() => {
        // Reset the selected items after successful checkout
        setSelectedItems([]);
        setSelectedPaymentOption(''); // Optionally reset the payment option
      });
    } else {
      // If payment option is not selected, show this alert
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="purchaseMenu">
      <h2>Purchase Menu</h2>
      {/* Display hot drinks, cold drinks, and food items */}
      <ul>
        <div>
          {hotdrinks.map((item) => (
            <li class="hotdrinkblock" key={item.title} onClick={() => handleItemClick(item)}>
              {item.title} - €{item.price.toFixed(2)}
            </li>
          ))}
        </div>
        <div>
          {coldDrinks.map((item) => (
            <li class="colddrinkblock" key={item.title} onClick={() => handleItemClick(item)}>
              {item.title} - €{item.price.toFixed(2)}
            </li>
          ))}
        </div>
        <div>
          {foodItems.map((item) => (
            <li class="fooditemblock" key={item.title} onClick={() => handleItemClick(item)}>
              {item.title} - €{item.price.toFixed(2)}
            </li>
          ))}
        </div>
      </ul>
      {/* Conditionally display selected items and total price only if there are selected items */}
      {selectedItems.length > 0 && (
        <>
          <h3>Selected Items:</h3>
          <ul>
            <div className="selectedItems">
              {selectedItems.map((item) => (
                <li className="selectedItemList" key={item.title}>
                  {item.title} - €{item.price.toFixed(2)} (Quantity: {item.quantity}){' '}
                  <button className="deleteButton" onClick={() => handleItemDelete(item)}>Delete</button>
                </li>
              ))}
            </div>
          </ul>
          <h3>Total: €{calculateTotal()}</h3>
        </>
      )}
      <div className="paymentOpt">
        <label className="paymentLabel">Select Payment Method:</label>
        <div>
          {/* Display radio buttons for payment options */}
          {paymentOptions.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={selectedPaymentOption === option}
                onChange={handlePaymentOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
        {/* Checkout and logout buttons */}
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>

  );
};

export default PurchaseFunction;



