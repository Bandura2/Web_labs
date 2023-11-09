import styled from 'styled-components';

const ImageInsectContainer = styled.div`
  box-shadow: 0 4px 8px 8px darkgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 10px;
  background-color: green;
  border-radius: 5px;
  margin-bottom: 100px;
  width: 350px;
  border: 1.5px solid black;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

const ImageInsect = styled.img`
  max-width: 340px;
  height: auto;
`;

const Text = styled.p`
  color: black;
  margin-top: 10px;
  padding: 0 5px;
  text-align: center;
  font-size: 18px;
`;

const TextName= styled.p`
  color: black;
  margin-top: 10px;
  padding: 0 5px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export { ImageInsectContainer, CardContainer, ImageInsect, Text, TextName };