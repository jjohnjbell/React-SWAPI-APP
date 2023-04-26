import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';
import axios from 'axios'

export default function CardsDetails() {
    const params = useParams();
    const { name } = params;
    const [isLoading, setLoadingState] = useState(true)
    const [person, setPerson] = useState(null)

    async function fetchDetails() {

        if(name){
            const url = `https://swapi.dev/api/people/?search=${name}`
            setLoadingState(true)
            const detailResults = await axios.get(url);
            console.log(detailResults)
            const { data } = detailResults;
            const {results} = data;
            setPerson(results[0])
        }
       
    }

    useEffect(()=> {
        fetchDetails()
        setLoadingState(false)
      }, [name])

    return (
        <div className="detailedCard" style={{listStyleType:"none",paddingTop:"0"}}> 
            {person && <Card isDetail = {true} {...person}/>}
        </div>
    )
}