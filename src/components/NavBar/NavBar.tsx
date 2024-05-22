import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button">☰</button>
        <span className="logo">Furrl</span>
      </div>
      <div className="navbar-right">
        <button className="icon-button"><a style={{textDecoration:'none'}} href='https://furrl.in/wishlist'>❤</a></button>
        <button className="icon-button"><a style={{textDecoration:'none'}} href='https://furrl.in/cart'>🛒</a></button>
      </div>
    </nav>
  );
};

export default NavBar;
