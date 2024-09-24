import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/screens/HomePage.jsx';
import { LoginPage } from './components/screens/loginPage';
import AddHotDrink from './components/screens/addHotDrinks';
import AddColdDrink from './components/screens/addColdDrinks';
import AddFoodItem from './components/screens/addFoodItems';
import DeleteHotDrink from './components/screens/deleteHotDrinks';
import DeleteColdDrink from './components/screens/deleteColdDrinks';
import DeleteFoodItem from './components/screens/deleteFoodItems';
import { Header } from './components/screens/header.jsx';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/add" element={<AddHotDrink />} />
        <Route path="/addHotDrinks" element={<AddHotDrink />} />
        <Route path="/addColdDrinks" element={<AddColdDrink />} />
        <Route path="/addFoodItems" element={<AddFoodItem />} />
        <Route path="/deleteHotDrinks" element={<DeleteHotDrink />} />
        <Route path="/deleteColdDrinks" element={<DeleteColdDrink />} />
        <Route path="/deleteFoodItems" element={<DeleteFoodItem />} />
      </Routes>
    </div>
  );
}

export default App;

