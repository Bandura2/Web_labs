import React from "react";
import { Nav } from "./Navigation.style";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  return (
    <Nav>
      <ul>
        <li><Link to="/" className={location.pathname === '/' ? 'homePage active' : 'homePage'}>Home</Link></li>
        <li><Link to="/catalog" className={location.pathname === '/catalog' ? 'active' : ''}>Catalog</Link></li>
        <li><Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link></li>
      </ul>
    </Nav>
  )
};

export default Navigation;