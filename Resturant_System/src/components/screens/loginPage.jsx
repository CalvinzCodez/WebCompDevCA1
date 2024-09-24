import React, { useState } from 'react';
import '..//styleSheets/loginPage.css';
import '../styleSheets/buttons.css';
import PurchasePage from './purchasePage';
import OptionPage from './optionPage';



export const LoginPage = ({ loggedIn, setLoggedIn }) => {
    // State variables to manage username, password, and login status
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  // const [loggedIn, setLoggedIn] = useState(false);

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Event handler for login button click
  const handleLogin = (e) => {
    e.preventDefault();
    // Check credentials 
    const { username, password } = credentials;

    // Basic validation 
    if (username === 'staff' && password === 'password') {
      setLoggedIn(true);
    } else if (username === 'admin' && password === 'adminpassword') {
      setLoggedIn(true);
    } else {
      // Shows alert for invalid credentials
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      {loggedIn ? (// If logged in, render either PurchasePage or OptionPage based on the username
        <>
          {credentials.username === 'staff' ? <PurchasePage /> : <OptionPage />}
        </>
      ) : (
                // If not logged in, render the login form
        <form onSubmit={handleLogin}>
          <h2>Login Page</h2>
          <label>
            {/* Input field for username */}
            <input type="text" name="username" placeholder="Username" maxLength="30" value={credentials.username} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            {/* Input field for password */}
            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleInputChange} required />
          </label>
          <br />
          {/* Login button */}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};


