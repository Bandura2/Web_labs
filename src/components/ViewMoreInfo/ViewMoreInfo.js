import React, { useState, useEffect } from "react";
import { TopCountainer, TopRightCountainer, ViewMoreInfo, ImageInsect, BottomCountainer } from "./ViewMoreInfo.styled";
import { Link, NavLink } from 'react-router-dom';
import { Button, Modal, Space, InputNumber } from "antd";
import { useDispatch } from 'react-redux';


const ViewMoreInf = ({ item }) => {
    const { id, name, price, description, type, image_name } = item;

    const pathToImage = 'img/';
    const adderToPhoto = '_photo.png';
    const [image, setImage] = useState('');
    const [isVisibleModal, setisVisibleModal] = useState(false);


    useEffect(() => {
        const fullPathToFile = pathToImage + image_name + adderToPhoto;

        import(`../${fullPathToFile}`)
            .then((imageModule) => setImage(imageModule.default))
            .catch((error) => console.error('Error importing image:', error));
    }, [image_name]);


    const [count, setValue] = useState(1);
    const dispatch = useDispatch();

    const addInsect = () => {
        dispatch({
            type: "ADD_INSECT",
            payLoad: {
                id: id,
                img: image,
                name: name,
                price: price,
                description: description,
                type: type,
                count: count,
            },
        });
        showModal();
    };

    const showModal = () => {
        setisVisibleModal(true);
    };


    const handleReaction = () => {
        setisVisibleModal(false);
    };

    return (
        <div>
            <ViewMoreInfo>
                <TopCountainer>
                    <ImageInsect src={image} alt={name} />
                    <TopRightCountainer>
                        <h1>{name}</h1>
                        <p style={{ fontWeight: 'bold' }}>{type}</p>
                        <p>{description}</p>
                    </TopRightCountainer>
                </TopCountainer>
                <BottomCountainer>
                    <p>Price: {price}</p>
                    <Space style={{ marginBottom: "15px" }}>
                        <h4>Count:</h4>
                        <InputNumber min={1} value={count} onChange={setValue} style={{ backgroundColor: "#979797" }} />
                    </Space>
                    <Link to={`/catalog`} style={{ textDecoration: "none" }} className="greenButton" >
                        Close
                    </Link>
                    <Link to={``} className="greenButton" onClick={addInsect}>Add To Card</Link>
                </BottomCountainer>
            </ViewMoreInfo>
            <Modal
                title="Report adding to cart"
                open={isVisibleModal}
                onOk={handleReaction}
                onCancel={handleReaction}
                footer={[
                    <NavLink key="back" to="/cart">
                        <Button onClick={handleReaction}>To Cart</Button>
                    </NavLink>,
                    <Button key="continue" type="primary" onClick={handleReaction} style={{ marginLeft: "20px", backgroundColor: "darkgreen" }}>
                        Continue
                    </Button>
                ]}>
                <p>Insect {name} has been added to cart</p>
            </Modal>
        </div>
    )
};

export default ViewMoreInf;