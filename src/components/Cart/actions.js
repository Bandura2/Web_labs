export const action = { type: "", payLoad: {} };

export const incrementCount = (item) => {
    return {
        type: "INCREMENT_COUNT",
        payLoad: { name: item },
    };
};

export const decrementCount = (item) => {
    return {
        type: "DECREMENT_COUNT",
        payLoad: { name: item },
    };
};