import React from 'react'
import aToZBtn from '../assets/images/atoz.svg'


export default function DeckSearch({setDeckSearch}) {
  
  function handelDeckSearchInput(e) {
    const text = e.target.value;
    setDeckSearch(text);
  }


  function createDeck(){
   let deckName = prompt("Name your DECK!")
    localStorage.setItem(deckName, JSON.stringify(deckName))
  }

  return (
    <>
    <div className="searchContainer" id= "deckSearchContainer">
        <input className = "searchBar deckSearchBar" type="search"  placeholder='Search' onChange={handelDeckSearchInput}  /> 
        <button onClick={createDeck} id = "deckBtnDiv">+</button>
      
    </div>
   
    </>
  )
}



