import React from 'react'
import {Link} from "react-router-dom"; 

export default function AppHeader(){

    function tbc(){
        document.getElementById("message").textContent = "T.B.C"
        setTimeout(() => document.getElementById("message").textContent = "",3000)
    }

    function thankYou(){
        document.getElementById("profileName").textContent = "Thank you!"
        setTimeout(() => document.getElementById("profileName").textContent = "Joshua Bell",3000)
    }
    
    function underConstruction(){
        // document.getElementById("message").textContent = "Apologies, Under Construction! ⛏ "
        // setTimeout(() => document.getElementById("message").textContent = "",3000)
        // setSearch
    }

    // const [message,setMessage]=useState('')
    // const [message,setMessage]=useState('')
    // const [message,setMessage]=useState('')

    return(
        <header>
            <nav className="navLinksRowContainer"> 
                <div className='cardDeckBtn'>
                    <a href="/"><button   id="underConstruction" className="allCardsMenuImg"></button></a>
                    <button href="#" onClick={tbc}className="decksMenuImg"> </button>
                </div>
                <button href="#" onClick={thankYou} id="profileName"  className="profileName"> Joshua Bell</button>
            </nav>
            <h3 id = "message"></h3>
            <hr className="seperator"/>
        </header>
    )
}