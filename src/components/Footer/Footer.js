import React from 'react';
import { YoutubeIcon, TwitterIcon, FacebookIcon, SocialIcons, FooterContainer } from './Footer.styled';
import Logotype from '../Logo/Logo';

const Footer = () => {
  return (
    <FooterContainer>
      <Logotype />
      <SocialIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <YoutubeIcon />
        </a>
      </SocialIcons>
    </FooterContainer>
  );

};

export default Footer;