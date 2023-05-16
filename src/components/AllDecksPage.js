import Pagination from '../components/Pagination';
import SearchFilter from '../components/SearchFilter';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import DeckBreadCrumb from './DeckBreadCrumb';
import Deck from './Deck';




export default function AllDecksPage() {
    // const[urlName,setUrlName] = useState(name)



    return (
        <div className="decksContainer">

      {/* <DeckBreadCrumb /> */}

        <Deck />

        </div>
    )
}