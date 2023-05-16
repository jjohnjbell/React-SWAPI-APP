import React, { useState, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom';




export default function Deck(props) {
    const [cardTotal, setCardTotal] = useState('');
    const navigate = useNavigate();


    return (
        <div className='deckItem' >

            <div className='deckHeader'>

            </div>

            <div className='deckBody'>

            </div>
        </div>

    )
}
