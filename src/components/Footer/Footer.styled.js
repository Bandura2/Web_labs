import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  /* margin-left: 50%; */
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: darkgreen;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 530px;
  margin-right: 30px;

  a {
    color: black;
    text-decoration: none;
    margin-right: 10px;
  }
`;

const FacebookIcon = styled(FontAwesomeIcon).attrs({ icon: faFacebook })`
  font-size: 24px;
  :active {
    color: blue;
  }
`;

const TwitterIcon = styled(FontAwesomeIcon).attrs({ icon: faTwitter })`
  font-size: 24px;
  padding-left: 20px;
  :active {
    color: lightblue;
  }
`;

const YoutubeIcon = styled(FontAwesomeIcon).attrs({ icon: faYoutube })`
  font-size: 24px;
  padding-left: 20px;
  :active {
    color: red;
  }
`;

export { YoutubeIcon, TwitterIcon, FacebookIcon, SocialIcons, FooterContainer };
