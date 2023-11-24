import React, { useState, useEffect } from "react";
import { TopCountainer, TopRightCountainer, ViewMoreInfo, ImageInsect, BottomCountainer } from "./ViewMoreInfo.styled";
import { Link } from 'react-router-dom';

const ViewMoreInf = ({item}) => {
    const { name, price, description, type, image_name } = item;

    const pathToImage = 'img/';
    const adderToPhoto = '_photo.png';
    const [image, setImage] = useState(null);
    
    useEffect(() => {
        const fullPathToFile = pathToImage + image_name + adderToPhoto;

        import(`../${fullPathToFile}`)
        .then((imageModule) => setImage(imageModule.default))
        .catch((error) => console.error('Error importing image:', error));
    }, [image_name]);

    return (
        <ViewMoreInfo>
            <TopCountainer>
                <ImageInsect src={image} alt={name}/>
                <TopRightCountainer>
                    <h1>{name}</h1>
                    <p style={{fontWeight: 'bold'}}>{type}</p>
                    <p>{description}</p>
                </TopRightCountainer>
            </TopCountainer>
            <BottomCountainer>
                <p>Price: {price}</p>
                <Link to={`../catalog/`} style={{ textDecoration: "none" }}>
                    <button>Close</button>
                </Link>
                <button>Add To Card</button>
            </BottomCountainer>
        </ViewMoreInfo>
    )
};

export default ViewMoreInf;