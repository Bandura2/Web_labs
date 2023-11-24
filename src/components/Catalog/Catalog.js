import React, { useState } from "react";
import CardList from "../CardsContainer/CardsContainer";
import UnderHeader from '../UnderHeader/UnderHeader';


const Catalog = () => {

    const [filter, setFilter] = useState({
        searchValue: '',
        selectedKind: 'none',
        selectedType: 'all'
        });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return(
    <div style={{width: '100%' }}>
        <UnderHeader onFilterChange={handleFilterChange}/>
        <CardList filter={filter}/>        
    </div>
    );
};

export default Catalog;