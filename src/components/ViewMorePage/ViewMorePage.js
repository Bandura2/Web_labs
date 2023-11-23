import React from "react";
import ViewMoreInf from "../ViewMoreInfo/ViewMoreInfo";
import { ViewMorePag } from "./ViewMorePage.styled";
import { useParams } from 'react-router-dom';

const ViewMorePage = ({ listItems }) => {
    const { insectId } = useParams();
    const selectedInsect = listItems.find(item => item.id.toString() === insectId);

    return(
        <ViewMorePag>
            <ViewMoreInf item={selectedInsect}/>
        </ViewMorePag>
        )
};

export default ViewMorePage;