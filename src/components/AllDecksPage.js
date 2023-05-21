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


  // Monitor local Storage to see if there are any entries to generate Decks
  useEffect(() => {

    for (let i = 0; i < localStorage.length; i++) {
      newArray.push(localStorage.key(i))
    }

    console.log(`local storage length changed`)
    setLocalStorageArray(newArray)
  }, [localCount])



  return (
    <>

      {/* <div className="decksContainer"> */}
      <DeckSearch setDeckSearch={setDeckSearch} />

      {!localCount && <div className='noDecksCont'>
        <p>No Decks Created. Please create a Deck by pressing the Add Deck</p>
        <img id="noDecksImg" src='./images/deckBtn.svg' />
        <p>button above.</p></div>}

      {localCount && <ul className="wholeCards" >
        {localStorageArray.map((item) => (
          <Deck key={localStorageArray.indexOf(item)} name={item} localCount={localCount} />
        ))}
      </ul>}

      {/* </div> */}
      <Pagination
        count={1}
        page={1}
        setPage={1} />
    </>
  )

}