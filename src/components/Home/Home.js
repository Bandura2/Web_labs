import React, { useState } from 'react';
import terrarium_img from "../img/terrarium_photo.png";
import { HomeContainer, HomeImage, HomeText, HomeTitle, HomeContent, ViewMoreBut } from './Home.styled'
import { ImageInsectContainer, CardContainer, ImageInsect, Text, TextName, Type } from "./Home2.styled";

const ImageInsectWithText = ({ imageSrc, title, text, type }) => {
  return (
      <ImageInsectContainer>
          <ImageInsect src={imageSrc}/>
          <TextName>{title}</TextName>
          <Text>{text}</Text>
          <Type>{type}</Type>
      </ImageInsectContainer>
  );
};

const Home = ({ listCards }) => {
    const [countOfVisibleCards, reSetVisibleCards] = useState(3);

    const addVisibleCards = () => {
        reSetVisibleCards(countOfVisibleCards + 3);
    };

    return (<>
            <HomeContainer>
                <HomeImage className='terrarium' src={terrarium_img} alt="Fail" />
                <HomeContent>
                    <HomeTitle>Terra_rium</HomeTitle>
                    <HomeText>Enter our ominous online terrarium emporium, where the beauty of nature conceals its darkest enigmas.
                         Venomous serpents and unearthly insects lurk within digital glass confines, casting a chilling aura.
                          Life's fragility and death's persistence entwine in this virtual darkness. Beware, for you
                           may become ensnared in the creeping terror of your screen</HomeText>
                </HomeContent>
            </HomeContainer>
            
            <CardContainer>
                {listCards.slice(0, countOfVisibleCards).map((card, index) => (
                    <ImageInsectWithText key={index} imageSrc={card.image} title={card.title} text={card.description} />
                ))}
            </CardContainer>
            {countOfVisibleCards < listCards.length && (
            <ViewMoreBut>
              <button onClick={addVisibleCards} >View More</button>
            </ViewMoreBut>
            )}
            </>
    );
};

export default Home;
