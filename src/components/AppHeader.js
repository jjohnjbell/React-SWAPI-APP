import React from 'react'
import { Link } from "react-router-dom";
import allDecksBtn from '../assets/images/decksBtnImg.svg'

export default function AppHeader() {


    return (
        <header>
            <nav className="navLinksRowContainer">
                <div className='cardDeckBtn'>
                    <a href="/"><button id='allCardsBtn' className="headerBtn"></button></a>

                   <Link className="headerBtn" to="/AllDecks" ><img id=  "allDecksBtn" src={allDecksBtn}/></Link>

                   <button href="#" id="profileName" className="profileName"> Joshua Bell</button>
                </div>
               
            </nav>
            <h3 id="message"></h3>
            <hr className="seperator" />
        </header>
    )
}