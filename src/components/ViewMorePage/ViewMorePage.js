import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ViewMoreInf from "../ViewMoreInfo/ViewMoreInfo";
import { ViewMorePag } from "./ViewMorePage.styled";
import { getInsectById } from "../../fetching";

const ViewMorePage = () => {
    const { insectId } = useParams();
    const [selectedInsect, setSelectedInsect] = useState();
    
    useEffect(() => {
        getInsectById( insectId )
        .then((response) => {
            setSelectedInsect(response.data);
        })
        .catch(error => console.error('Error fetching products:', error));
    }, [insectId]);

    if (selectedInsect == null || selectedInsect === undefined) { 
        return;
      }

    return(
        <ViewMorePag>
            <ViewMoreInf item={selectedInsect[0]}/>
        </ViewMorePag>
        )
};

export default ViewMorePage;