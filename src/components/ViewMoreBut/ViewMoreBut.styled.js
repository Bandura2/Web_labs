import styled from "styled-components";

const ViewMoreBut = styled.div`
  a{
    text-decoration: none;
    background-color: darkgreen;
    color: yellow;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    width: 100px;
    margin: 0 auto;
    padding-right: 25px;
  }:active {
    color: black;
  }

  padding-bottom: 70px;
`;

export { ViewMoreBut };