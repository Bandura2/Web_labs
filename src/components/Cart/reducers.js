// const defaultState = {
//     insectsList: [],
// };

const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_INSECT":
            const indexByName = findIndexByName(state.insectsList, action.payLoad.name);
            if (indexByName === -1) {
                return { ...state, insectsList: [...state.insectsList, action.payLoad] };
            } else {
                const updateInsectsList = [...state.insectsList];
                updateInsectsList[indexByName] = {
                    ...updateInsectsList[indexByName],
                    count: updateInsectsList[indexByName].count + action.payLoad.count,
                };
                return { ...state, insectsList: updateInsectsList };
            }
        case "INCREMENT_COUNT":
            return {
                ...state,
                insectsList: state.insectsList.map((item) => {
                    if (item.name === action.payLoad.name) {
                        return { ...item, count: item.count + 1 };
                    }
                    return item;
                }),
            };
        case "DECREMENT_COUNT":
            return {
                ...state,
                insectsList: state.insectsList.map((item) => {
                    if (item.name === action.payLoad.name && item.count > 0) {
                        return { ...item, count: item.count - 1 };
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};
