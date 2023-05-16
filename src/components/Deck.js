import React, { useState, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom';





export default function Deck(props) {
    const [cardTotal, setCardTotal] = useState('');
    const navigate = useNavigate();
    const [bgImg, setBgImg] = useState('../images/blackBg.svg')



    return (
        <li className='deckItem' >

            <div className='deckHeader' style={{ backgroundImage: `url(${bgImg})` }}>

                <div className="deckHeaderColumn">
                    <img className="deckHeaderIcon" src='./images/deckIcon.svg' />
                    <h3 className="deckName">Name</h3>
                </div>

                <div className="deckDeleteIconContainer"> <img id="deleteGroupIcon" src='./images/deleteGroupIcon.svg' /> </div>

            </div>

            <div className='deckBody'>

            </div>
        </li>

    )
}
