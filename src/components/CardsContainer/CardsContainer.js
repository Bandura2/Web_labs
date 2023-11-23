import React, { useState } from 'react';
import { ImageInsectContainer, CardContainer, ImageInsect, Text, TextName, Type, ViewMoreBut } from "./CardsContainers.styled";
import { Link } from 'react-router-dom';
import ViewMoreInfo from '../ViewMoreInfo/ViewMoreInfo';

const ImageInsectWithText = ({ item, onViewMore }) => {
    const openVievMore = () => {
        onViewMore(item);
      };
        return (
            <ImageInsectContainer>
                <ImageInsect src={item.image}/>
                <TextName>{item.title}</TextName>
                <Text>{item.text}</Text>
                <Type>{item.price}</Type>
                <Type>{item.type}</Type>
                <Link to={`/insect/${item.id}`} style={{textDecoration: "none"}}>
                    <ViewMoreBut onClick={openVievMore}><button>View More</button></ViewMoreBut>
                </Link>
            </ImageInsectContainer>
        );
};

const CardList = ({ listItems, filter }) => {
    
    const [selectedInsect, selectInsect] = useState(null);
    const [isOpenviewMore, isOpenViewMore] = useState(false);

    const filterItems = () => {
        const { searchValue, selectedKind, selectedType } = filter;

        let filteredItems = [...listItems];

        if (searchValue) {
            filteredItems = filteredItems.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        }

        if (selectedType !== 'All') {
            if (selectedType === "not poisoned") {
                filteredItems = filteredItems.filter((item) => /not/i.test(item.type));
            } else if (selectedType === "poisoned") {
                filteredItems = filteredItems.filter((item) => !/not/i.test(item.type));
            }
        }
            
        if (selectedKind === 'asc') {
            filteredItems.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        } else if (selectedKind === 'desc') {
            filteredItems.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        }

        return filteredItems;
  };

  const filteredItems = filterItems();
const openVievMore = (item) => {
    selectInsect(item);
    isOpenViewMore(true);
  };

    return (
        <CardContainer>
            {filteredItems.map((item) => (
                <ImageInsectWithText key={item.id} item={item} onViewMore={() => openVievMore(item)}/>
            ))}
            {isOpenviewMore && selectedInsect && (
                <ViewMoreInfo insect={selectedInsect}/>
            )}
        </CardContainer>
    );
};

export default CardList;