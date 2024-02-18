/**
 * src/components/navBar/index.js
 */

import React from 'react';
import './Navbar.css';
import Button from '../Button';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          {/* Your logo goes here */}
        </div>
        <div className="navbar-menu">
          <Button
            text="Home"
            color="white"
            shape="square"
            onClick={() => console.log('Home clicked')}
          />
          <div className="navbar-dropdown-button">
          <Button
            text="Apps"
            color="white"
            shape="square"
            onClick={() => console.log('Apps clicked')}
            hasDropdownSymbol={true}
          />
        </div>
          <Button
            text="Contact"
            color="white"
            shape="square"
            onClick={() => console.log('Contact clicked')}
          />
          <Button
            text="Login"
            color="white"
            shape="square"
            onClick={() => console.log('Login clicked')}
          />
          <Button
            text="Sign Up"
            color="blue"
            shape="round"
            onClick={() => console.log('Sign Up clicked')}
          />
        </div>
      </nav>
    );
  };
  
  export default Navbar;
