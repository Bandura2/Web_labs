import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #979797;
  display: flex;
  padding: 20px;
`;

const HomeImage = styled.img`
  margin-left: 80px;
  margin-right: 50px;
  max-width: 550px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 10px darkgreen;

`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
`;

const HomeTitle = styled.p`
color: darkgreen;
  font-size: 36px;
  margin-left: 50px;
  margin-top: 20px;
  font-weight: 600;
`;

const HomeText = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: darkgreen;
  margin-left: 50px;
`;

export { HomeContainer, HomeImage, HomeText, HomeTitle, HomeContent };
