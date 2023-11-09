import React from 'react';
import { HeaderContainer } from './Header.styled';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <Navigation/>
    </HeaderContainer>
  );
};

export default Header;
