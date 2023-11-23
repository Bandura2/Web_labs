import React, { useState } from "react";
import CardList from "../CardsContainer/CardsContainer";
import UnderHeader from '../UnderHeader/UnderHeader';


const Catalog = ({ listItems }) => {

    const [filter, setFilter] = useState({
        searchValue: '',
        selectedKind: 'none',
        selectedType: 'All'
        });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return(
    <div style={{width: '100%' }}>
        <UnderHeader onFilterChange={handleFilterChange}/>
        <CardList listItems={listItems} filter={filter}/>        
    </div>
    );
};

export default Catalog;