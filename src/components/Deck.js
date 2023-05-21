import React, { useState, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Deck(props) {
    const [bgImg, setBgImg] = useState('../images/blackBg.svg')

    let bgArray = ['../images/blackBg.svg', '../images/redBg.svg', '../images/greenBg.svg']

    useEffect(() => {
        let randomChooser = Math.floor(Math.random() * 3)
        setBgImg(bgArray[randomChooser])
    }, [])
    
function countValue(key){
    return localStorage.getItem(key).length
    
}

// console.log(JSON.parse(localStorage.key(joshua)).length)

    return (
        <li className='deckItem' >

            <div className='deckHeader' style={{ backgroundImage: `url(${bgImg})` }}>

                <div className="deckHeaderColumn">
                    <img className="deckHeaderIcon" src='./images/deckIcon.svg' />
                    <p className="deckName">{props.name}</p>
                </div>

                <div className="deckDeleteIconContainer"> <img id="deleteGroupIcon" src='./images/deleteGroupIcon.svg' /> </div>

            </div>

            <div className='deckBody' >
                <span>{countValue(props.name)}</span>
                {/* <span>{props.localCount}</span> */}
                <p>total cards</p>

            </div>
        </li>

    )
}
