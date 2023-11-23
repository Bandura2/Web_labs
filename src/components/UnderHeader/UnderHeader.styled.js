import styled from "styled-components";

const UnderHeaderHeader = styled.div`
    background-color: darkgreen;
    /* height: auto; */
    display: flex;
    justify-content: space-around;
`;

const SearchInput = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
    height: 25px;
    background-color: #979797;
    color: black;
    font-size: 18px;
    font-weight: bold;
    &::placeholder {
        color: black;
    }
`;

const FindBut = styled.button`
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #979797;
    color: black;
    font-size: 18px;
    font-weight: bold;
`;

const SelectCountainer = styled.select`
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #979797;
    color: black;
    font-size: 18px;
    font-weight: bold;
`;

export { UnderHeaderHeader, SearchInput, FindBut, SelectCountainer };