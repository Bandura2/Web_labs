import React from 'react';
import terrarium_img from "../img/terrarium_photo.webp";
import { HomeContainer, HomeImage, HomeText, HomeTitle, HomeContent } from './Home.styled'

const Home = () => {
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
            </>
    );
};

export default Home;
