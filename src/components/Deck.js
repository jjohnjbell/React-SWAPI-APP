import React, { useState, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Deck(props) {
    const [bgImg, setBgImg] = useState('../images/blackBg.svg')
    const { isDetail } = props
    const navigate = useNavigate()
    let bgArray = ['../images/blackBg.svg', '../images/redBg.svg', '../images/greenBg.svg']

    useEffect(() => {
        let randomChooser = Math.floor(Math.random() * 3)
        setBgImg(bgArray[randomChooser])
    }, [])

    function countValue(key) {
        return localStorage.getItem(key).length

    }

    function deleteDeck(name) {
        let obj = JSON.parse(localStorage.getItem('main'))
        delete obj[name]
        localStorage.setItem('main', JSON.stringify(obj))
        window.location.reload()
    }

    function totalCards(name) {
        let obj = JSON.parse(localStorage.getItem('main'))
        return obj[name].length
    }

    // function deleteSpecificItem(localStorageArray, objectKeyPair) {
    //     let indexItem = localStorageArray.indexOf(objectKeyPair)
    //     if (indexItem > -1) {
    //         localStorageArray.splice(indexItem, 1)
    //         localStorage.clear()
    //         resultsEl.innerHTML = ""
    //         localStorage.setItem("myMarks", JSON.stringify(localStorageArray))
    //         showLinks()

    //     }
    // }




    // console.log(JSON.parse(localStorage.key(joshua)).length)

    return (
        <li className='deckItem'  style={{border:'2px solid red'}}>

            <div className='deckHeader' style={{ backgroundImage: `url(${bgImg})` }}>

                <div className="deckHeaderColumn">
                    <img onClick={() => navigate(`/details/${props.name}`)} className="deckHeaderIcon" src='./images/deckIcon.svg' />
                    <p className="deckName">{props.name}</p>
                </div>

                <div onClick={() => deleteDeck(props.name)} className="deckDeleteIconContainer"> <img id="deleteGroupIcon" src='./images/deleteGroupIcon.svg' /> </div>

            </div>

            <div className='deckBody' >
                {/* <span>{countValue(props.name)}</span> */}
                <span>{totalCards(props.name)}</span>
                {/* <span>{props.localCount}</span> */}
                <p>total cards</p>

            </div>
        </li>

    )
}
