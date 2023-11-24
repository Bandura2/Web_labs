import React, { useState } from 'react';
import { UnderHeaderHeader, SearchInput, FindBut, SelectCountainer } from './UnderHeader.styled'

const sortKindList = ["none", "asc", "desc"];

const typeList = ["all", "poisonous", "not poisonous"]; 

const UnderHeader = ({ onFilterChange }) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedKind, setSelectedkind] = useState('none');

    const searching = (value) => {
        setSearchValue(value);
    };

    const chooseKind = (kind) => {
        setSelectedkind(kind);
    }; 

    const chooseType = (type) => {
        setSelectedType(type);
    }; 

    const handleFind = () => {
        onFilterChange({ searchValue, selectedKind, selectedType });
    };

    return (
        <UnderHeaderHeader>
            <SearchInput
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => searching(e.target.value)}/>
            <SelectCountainer value={selectedKind} onChange={(e) => chooseKind(e.target.value)}>
                {sortKindList.map(kind => (
                    <option key={kind} value={kind}>{kind}</option>
                ))}
            </SelectCountainer>
            <SelectCountainer value={selectedType} onChange={(e) => chooseType(e.target.value)}>
                {typeList.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </SelectCountainer>
            <FindBut onClick={handleFind}>Find</FindBut>
        </UnderHeaderHeader>
    );
};

export default UnderHeader;