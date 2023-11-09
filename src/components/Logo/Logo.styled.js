import styled from "styled-components";

const Logotype = styled.div`
  a {
    text-decoration: none;
    color: yellow;
  }

  img {
    width: 70px;
    height: auto;
  } 
  
  .Wraper {
    display: flex;
    align-items: center;    
    flex-direction: row;
  }:active {
    color: black;
  }

  .LogoName {
    display: block;
    padding-top: 10px;
    margin-left: 30px;
    font-size: 28px;
  }`;

  export { Logotype };