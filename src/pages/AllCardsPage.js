import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
import SearchFilter from '../components/SearchFilter';
import axios, { isCancel, AxiosError } from 'axios'
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';




export default function AllCardsPage() {
  const [page, setPage] = useState(1)
  const [people, setPeople] = useState([])
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [isLoading, setLoadingState] = useState(true)

  async function fetchPeople() {
    const url = `https://swapi.dev/api/people/?page=${page}`
    setLoadingState(true)
    const peopleResults = await axios.get(url);
    const { data } = peopleResults;
    const { results, count } = data
    setPeople(results)
    setCount(count)
    setLoadingState(false)
    setSearch('')
  }

  useEffect(()=>{
    if(!localStorage.length){
    let initialObject = {}
    localStorage.setItem('main',JSON.stringify(initialObject))
    }
  },[])

  //Sort Persons from A to Z
  async function fetchPeopleSorted() {
    const url = `https://swapi.dev/api/people/?page=${page}`
    setLoadingState(true)
    const peopleResults = await axios.get(url);
    const { data } = peopleResults;
    const { results, count } = data
    const sorted = results.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (b.name > a.name) {
        return -1
      } else {
        return 0
      }
    })
    setPeople(sorted)
    
    setCount(count)
    setLoadingState(false)
  }

  async function fetchOldest() {
    const url = `https://swapi.dev/api/people/?page=${page}`
    setLoadingState(true)
    const peopleResults = await axios.get(url);
    const { data } = peopleResults;
    const { results, count } = data
    const sorted = results.sort((a, b) => {
      if (a.birth_year > b.birth_year) {
        return 1
      } else if (b.birth_year > a.birth_year) {
        return -1
      } else {
        return 0
      }
    })
    setPeople(sorted)
    setCount(count)
    setLoadingState(false)
  }

  async function fetchYoungest() {
    const url = `https://swapi.dev/api/people/?page=${page}`
    setLoadingState(true)
    const peopleResults = await axios.get(url);
    const { data } = peopleResults;
    const { results, count } = data
    const sorted = results.sort((a, b) => {
      if (b.birth_year > a.birth_year) {
        return 1
      } else if (b.birth_year < a.birth_year) {
        return -1
      } else {
        return 0
      }
    })
    setPeople(sorted)
    setCount(count)
    setLoadingState(false)
  }




  useEffect(() => {
    fetchPeople()
  }, [page])


  // Checks what is being typed by user, only makes api call
  //after the stipulated amount of time (1000ms in this case)
  //has elapsed
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (search) {
        const url = `https://swapi.dev/api/people/?search=${search}`;
        setLoadingState(true)
        const searchResults = await axios.get(url);
        const { data } = searchResults;
        const { results, count } = data;
        setPeople(results)
        setCount(count)
        setLoadingState(false)
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [search])





  return (
    <>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        fetchPeopleSorted={fetchPeopleSorted}
        fetchYoungest = {fetchYoungest}
        fetchOldest={fetchOldest}
      />

      {isLoading && <div className="loadingImg"> <img src="./images/loading-gif.webp" />
      </div>}

      {!isLoading && <ul className="wholeCards">
        {people.map((person) => (
          <Card key={person.name} {...person}/>
        ))}

      </ul>}


      {count > 0 && <Pagination
        page={page}
        setPage={setPage}
        count={count}
      />}



    </>
  )
}
