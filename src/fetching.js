import axios from "axios";

export const getInsects = ( searchValue, selectedKind, selectedType ) => {
    return axios.get("http://localhost:3001/read", {params: { searchValue, selectedKind, selectedType }})
};

export const getInsectById = ( insectId ) => {
    return axios.get(`http://localhost:3001/insect/${insectId}`)
};
