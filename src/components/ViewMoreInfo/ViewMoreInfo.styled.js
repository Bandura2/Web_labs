import styled from "styled-components";

const TopCountainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 20px;
`;

const TopRightCountainer = styled.div`
    margin-top: 15px;
    width: 40%;
    h1 {
        font-size: 36px;
    }
    p {
        font-size: 26px;
    }
`;

const ViewMoreInfo = styled.div`
    width: 90%;
    height: 90%;
    background-color: green;
    margin: 10px auto;
    box-shadow: 0 4px 15px 15px darkgreen;
`;

const ImageInsect = styled.img`
  width: 350px;
  height: 250px;
  margin-top: 20px;
`;

const BottomCountainer = styled.div`
    display: flex;
    justify-content: space-around;

    p {
        margin-top: -15px;
        font-size: 26px;
    }

    button{
        white-space: nowrap;
        background-color: darkgreen;
        color: yellow;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        max-width: 140px;
        max-height: 55px;
    }:active {
        color: black;
    }
`;

export { TopCountainer, TopRightCountainer, ViewMoreInfo, ImageInsect, BottomCountainer };