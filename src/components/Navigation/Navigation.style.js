import styled from "styled-components";

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  .active {
    border-radius: 10px;
    border: 2px solid yellow;
  }
  
  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: yellow;
    font-size: 20px;
    padding-right: 15px;
    padding-left: 15px;
  }:active {
    color: black;
  }
`;

export { Nav };