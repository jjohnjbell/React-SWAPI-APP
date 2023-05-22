import React, { useState, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom';
import AllDecksPage from './AllDecksPage';



export default function Card(props) {
    const { isDetail, vehicles, starships } = props
    const [homeworld, setHomeworld] = useState('');
    const [species, setSpecies] = useState('');
    const [fetchedVehicles, setFetchedVehicles] = useState([]);
    const [fetchedStarships, setFetchedStarships] = useState([]);



    const navigate = useNavigate();




    async function fetchPersonsHomeWorld(url) {
        const homeworldObject = await axios.get(url)
        const { data } = homeworldObject
        const homeName = data.name
        setHomeworld(homeName)
    }

    async function fetchPersonsSpecie(url) {
        const specieObject = await axios.get(url)
        const { data } = specieObject
        const specieName = data.name ? data.name : "Unknown"

        setSpecies(specieName)

    }



    async function fetchVehiclesAndStarships() {
        const vehicleRequests = vehicles.map((url) => axios.get(url));
        const startshipRequests = starships.map((url) => axios.get(url));

        const vehicleResponses = await axios.all(vehicleRequests);
        const startshipResponses = await axios.all(startshipRequests);

        const vehicleArray = vehicleResponses.map((vehicle) => vehicle.data);

        const starshipArray = startshipResponses.map((startship) => startship.data);

        setFetchedVehicles(vehicleArray)
        setFetchedStarships(starshipArray)
    }

    useEffect(() => {
        fetchPersonsSpecie(props.species);

    }, [])



    useEffect(() => {
        fetchPersonsHomeWorld(props.homeworld);
        if (isDetail) {
            fetchVehiclesAndStarships();
        }
    }, [])

    // function createDeckEntry() {

    //     let chooseFraction = prompt("Are you light or dark side?")

    //     let temp = JSON.parse(localStorage.getItem(chooseFraction))

    //     if (temp) {
    //         array.push(props.name)
    //         localStorage.setItem(chooseFraction, JSON.stringify({temp},array))
    //     } else {
    //         localStorage.setItem(chooseFraction, JSON.stringify(props.name))
    //     }
    //     // // let retrieved = JSON.parse(localStorage.getItem("newDeck"))
    //     // console.log(Object.entries(localStorage).length)
    //     // console.log(retrieved)
    // }
    function createDeckEntry() {
        let jObj = {}
        let chooseFraction = prompt("Are you light or dark side?")
        let deckObject = JSON.parse(localStorage.getItem("main"))
        
        deckObject.dark.push("GOD IS GOOD")
            // jObj.chooseFraction = temp

            // localStorage.setItem("deck1", JSON.stringify(jObj))
           localStorage.setItem("main",JSON.stringify(deckObject))

          


    }

    // let decks = {
    //     dark: ["dark entry"],
    //     light: ["light entry"],
    // }

    // localStorage.setItem("main",JSON.stringify(decks))


    return (
        <li className='card--container' >

            <div className='cardHeader'>
                <div className='cardHeaderTop'>
                    <img src='/images/icons/cardHeaderIcon.svg' />
                    <img onClick={createDeckEntry} src='/images/icons/deckCardButton.svg' />
                </div>
                <div className="cardName" onClick={() => navigate(`/details/${props.name}`)}>{props.name} </div>
            </div>

            <div className='cardBody--container'>
                <div className='cardBioData'>


                    <span><img src='/images/icons/genderSymbol.svg' />{props.birth_year}</span>

                    <p>{species}</p>



                </div>

                <div className="personDetails">
                    <ul className="cardBackground">
                        <li className='personDetailsList'>

                            <span className="homeWorldText personDetailsText"><img className="personDetailsIcon" src='/images/icons/homeworldIcon.svg' /> HOMEWORLD</span>
                            <p>{homeworld}</p>
                        </li>

                        {
                            (isDetail && fetchedVehicles.length > 0) ? (
                                fetchedVehicles.map((vehicle) =>
                                    <li key={vehicle.name} className='personDetailsList personDetailsText'>
                                        <span><img className="personDetailsIcon" src='/images/icons/vehiclesIcon.svg' /> VEHICLE</span>
                                        <p>{vehicle.name}</p>
                                    </li>
                                )
                            ) : (
                                <li className='personDetailsList personDetailsText'>
                                    <span><img className=" personDetailsIcon" src='/images/icons/vehiclesIcon.svg' /> VEHICLES</span>
                                    <p>{props.vehicles.length}</p>
                                </li>
                            )
                        }

                        {
                            (isDetail && fetchedStarships.length > 0) ? (
                                fetchedStarships.map((starship) =>
                                    <li key={starship.name} className='personDetailsList personDetailsText'>
                                        <span><img className="personDetailsIcon" src='/images/icons/starshipIcon.svg' /> STARSHIP</span>
                                        <p>{starship.name}</p>
                                    </li>
                                )
                            ) : (
                                <li className='personDetailsList personDetailsText'>
                                    <span><img className="personDetailsIcon" src='/images/icons/starshipIcon.svg' /> STARSHIPS</span>
                                    <p>{props.starships.length}</p>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </li>

    )
}
