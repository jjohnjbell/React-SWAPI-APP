import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';
import axios from 'axios'
import Deck from './Deck';

export default function DeckDetails() {
    const params = useParams();
    const { name } = params;
    const [isLoading, setLoadingState] = useState(true)
    const [localStorageArray, setLocalStorageArray] = useState([])
    let newArray=[]

    function fetchDetails(){
    if (localStorage.getItem('main')) {
        for (let i = 0; i < localStorage.length; i++) {
            let tempObject = JSON.parse(localStorage.getItem('main'))
            let currentDeck = tempObject.name
            newArray.push(Object.keys(currentDeck))
        }

        setLocalStorageArray(newArray)
    }
    }

    useEffect(() => {
        fetchDetails()
        setLoadingState(false)
    }, [name])

    return (
        <div className="detailedDeck" style={{ listStyleType: "none", paddingTop: "0" }}>
            {<h1> WORKS</h1> }
        </div>
    )
}