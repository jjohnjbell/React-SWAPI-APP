import React from 'react'
import { useParams } from 'react-router-dom';

export default function DeckBreadCrumb(){
    const params = useParams();
    const { name } = params;

    
    return(
        <p className="breadCrumbs"><a href="#"><span id="allCardsText">Decks { ` > `}</span></a>  <span> { name ? `${name} Details` :  <a href="#">Select a card</a>}</span></p>
    )
}