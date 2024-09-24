import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/companyLogo.jpg'
import Swal from 'sweetalert2';
import '../styleSheets/headerPage.css';

export const Header = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  // Function that handles the logo click event
  const handleLogo = () => {
    // Shows a close-up of the company logo
    Swal.fire({
      imageUrl: (logo),
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    })
  }

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  }

  // Navbar containing a link to the homepage, loginpage and the logo
  return (
    <nav className="navbar">
      <ul className="headerContainer">
        {/* Logo with click event */}
        <li ><img className="logo" src={logo} alt="Logo" height={85} onClick={handleLogo} /></li>
        {/* Navigation links */}
        <li className="headerNav">
          <Link to="/">Home</Link>
        </li>
        <li className="headerNav">
          {loggedIn ? (
            <a href="/" onClick={handleLogout}>Logout</a>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
