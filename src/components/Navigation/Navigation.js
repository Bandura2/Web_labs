import React from "react";
import { Nav } from "./Navigation.style";

const Navigation = () => {
    return (
        <Nav>
        <ul>
          <li><a href="/" className='homePage'>Home</a></li>
          <li><a href="/">Catalog</a></li>
          <li><a href="/">Cart</a></li>
        </ul>
        </Nav>
    )
};

export default Navigation;