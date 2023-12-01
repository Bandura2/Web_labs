import axios from "axios";

const httpPathConstant = "http://localhost:3001"

export const getInsects = (searchValue, selectedKind, selectedType) => {
    return axios.get(httpPathConstant + "/read", { params: { searchValue, selectedKind, selectedType } })
};

export const getInsectById = (insectId) => {
    return axios.get(httpPathConstant + `/insect/${insectId}`)
};
