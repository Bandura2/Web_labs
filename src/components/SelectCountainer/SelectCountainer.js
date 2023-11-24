import React from 'react';
import { SelectCountainer } from "./SelectCountainer.styled";

const SelectCountainerr = ({ list }) => {
    return (
        <SelectCountainer>
            {list.map(item => (
                <option value={item}>{item}</option>
            ))}
        </SelectCountainer>
    )
};

export default SelectCountainerr;