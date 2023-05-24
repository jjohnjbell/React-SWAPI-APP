import Pagination from '../components/Pagination';
import SearchFilter from '../components/SearchFilter';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import DeckBreadCrumb from './DeckBreadCrumb';
import Deck from './Deck';
import DeckSearch from './DeckSearch';


 

export default function AllDecksPage() {
  const [deckSearch, setDeckSearch] = useState('')
  const [localStorageState, setLocalStorage] = useState({})
  const [localCount, setLocalCount] = useState(0)
  const [localStorageArray, setLocalStorageArray] = useState([])
  const [isLoading, setLoadingState] = useState(false)
  let newArray = []

 //Initial check of localStorage length
 useEffect(() => {
  setLocalCount(localStorage.length)
}, [])

//if local storage is ever completely empty, a Main object with empty values is created as the foundation for decks and cards to utilize
  useEffect(()=>{
    if(!localStorage.length){
    let initialObject = {}
    localStorage.setItem('main',JSON.stringify(initialObject))
    }
  },[])

  // Monitor local Storage to see if there are any entries to generate Decks
  useEffect(() => {
    if(localStorage.getItem('main')){
    for (let i = 0; i < localStorage.length; i++) {
      let tempObject = JSON.parse(localStorage.getItem('main'))
      newArray.push(Object.keys(tempObject))
    }

    setLocalStorageArray(newArray)
  }
  }, [localCount])

  //Check if localStorage object is empty of all keys indicating no cards are present
let mainObject = JSON.parse(localStorage.getItem('main'))
let keyCount = Object.keys(mainObject).length

  return (
    <>

      <DeckSearch setDeckSearch={setDeckSearch} />

      { keyCount === 0 && <div className='noDecksCont'>
        <p>No Decks Created. Please create a Deck by pressing the Add Deck</p>
        <img id="noDecksImg" src='./images/deckBtn.svg' />
        <p>button above.</p></div>}

      {keyCount > 0 && <ul className="deckWholeCards" >
        {localStorageArray.map((item) => (
          item.map((obj, index) => <Deck key={index} name={obj} localCount={localCount} />)
        ))}
      </ul>}


      <Pagination
        count={1}
        page={1}
        setPage={1} />
    </>
  )

}