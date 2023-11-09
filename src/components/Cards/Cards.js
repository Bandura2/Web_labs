import React from 'react';
import AntPicture from "../img/ant_photo.png";
import BeePicture from "../img/bee_photo.jpg";
import MantisPicture from "../img/mantis_photo.jpg";
import { ImageInsectContainer, CardContainer, ImageInsect, Text, TextName } from "./Cards.styled";

const cards = [
    {
      title: "Ants",
      description: 'Ants are tiny social insects known for their teamwork, communication, and diverse species.\
       They live in complex colonies with roles like workers, soldiers, and a queen.\
        Ants communicate through chemical signals (pheromones) and are skilled foragers.\
         They play a crucial role in ecosystems by aerating soil and controlling pests.',
      image: AntPicture,
    },{
      title: "Bees",
      description: 'Bees are tiny yet vital insects.\
       They tirelessly pollinate flowers, ensuring the growth of fruits and vegetables.\
        Bees live in complex colonies, with a queen, workers, and drones. Theyre famous for honey production and help maintain biodiversity.\
         However, bees face serious threats, and their protection is crucial for our ecosystems well-being.',
      image: BeePicture,
    },{
      title: "Mantises",
      description: 'Mantises are predatory insects known for their unique posture and hunting skills.\
       They have excellent camouflage, rotate their heads for a wide field of vision, and play a crucial role in controlling pests in ecosystems',
      image: MantisPicture,
    },
  ]

const ImageInsectWithText = ({ imageSrc, title, text }) => {
    return (
        <ImageInsectContainer>
            <ImageInsect src={imageSrc}/>
            <TextName>{title}</TextName>
            <Text>{text}</Text>
        </ImageInsectContainer>
    );
};

const CardList = () => {
    return (
        <CardContainer>
            {cards.map((card) => (
                <ImageInsectWithText imageSrc={card.image} title={card.title} text={card.description} />
            ))}
        </CardContainer>
    );
};

export default CardList;