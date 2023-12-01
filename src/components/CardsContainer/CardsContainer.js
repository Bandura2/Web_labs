import React, { useState, useEffect } from 'react';
import { ImageInsectContainer, CardContainer, ImageInsect, Text, TextName, Type, ViewMoreBut } from "./CardsContainers.styled";
import { Link } from 'react-router-dom';
import ViewMorePage from '../ViewMorePage/ViewMorePage';
import Loading from "../Loading/Loading";
import { getInsects } from '../../fetching';

let filteredItems = []

const ImageInsectWithText = ({ item, onViewMore }) => {

    const pathToImage = 'img/';
    const adderToPhoto = '_photo.png';
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fullPathToFile = pathToImage + item.image_name + adderToPhoto;

        import(`../${fullPathToFile}`)
            .then((imageModule) => setImage(imageModule.default))
            .catch((error) => console.error('Error importing image:', error));
    }, [item.image_name]);

    const openVievMore = () => {
        onViewMore(item);
    };
    return (
        <ImageInsectContainer>
            <ImageInsect src={image} />
            <TextName>{item.name}</TextName>
            <Text>{item.description}</Text>
            <Type>{item.price}</Type>
            <Type>{item.type}</Type>
            <Link to={`/insect/${item.id}`} style={{ textDecoration: "none" }}>
                <ViewMoreBut onClick={openVievMore}><button>View More</button></ViewMoreBut>
            </Link>
        </ImageInsectContainer>
    );
};

const CardList = ({ filter }) => {

    const [selectedInsect, selectInsect] = useState();
    const [isOpenviewMore, isOpenViewMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        const { searchValue, selectedKind, selectedType } = filter;

        getInsects(searchValue, selectedKind, selectedType)
            .then((response) => {
                setItems(response.data);

                setLoading(false);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [filter]);

    if (items == null || items === undefined) {
        return;
    }

    filteredItems = [...items];
    const openVievMore = ({ item }) => {
        selectInsect(item);
        isOpenViewMore(true);
    };

    return (
        <CardContainer>
            {loading ? (
                <Loading />
            ) : (
                filteredItems.map((item) => (
                    <ImageInsectWithText key={item.id} item={item} onViewMore={() => openVievMore(item)} />
                ))
            )}
            {isOpenviewMore && selectedInsect && (
                <ViewMorePage />
            )}
        </CardContainer>
    );
};

export default CardList;