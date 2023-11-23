import React from "react";
import { TopCountainer, TopRightCountainer, ViewMoreInfo, ImageInsect, BottomCountainer } from "./ViewMoreInfo.styled";
import { Link } from 'react-router-dom';

const ViewMoreInf = ({ item }) => {
    return (
        <ViewMoreInfo>
            <TopCountainer>
                <ImageInsect src={item.image} alt={item.title}/>
                <TopRightCountainer>
                    <h1>{item.title}</h1>
                    <p style={{fontWeight: 'bold'}}>{item.type}</p>
                    <p>{item.description}</p>
                </TopRightCountainer>
            </TopCountainer>
            <BottomCountainer>
                <p>Price: {item.price}</p>
                <Link to={`../catalog/`} style={{ textDecoration: "none" }}>
                    <button>Close</button>
                </Link>
                <button>Add To Card</button>
            </BottomCountainer>
        </ViewMoreInfo>
    )
};

export default ViewMoreInf;