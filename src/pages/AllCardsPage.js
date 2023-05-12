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
    console.log("fetchPpl ran")
    setPage(1)
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

  async function fetchPeopleSorted() {
    const url = `https://swapi.dev/api/people/?page=${page}`
    setLoadingState(true)
    const peopleResults = await axios.get(url);
    const { data } = peopleResults;
    const { results, count } = data
    const sorted= results.sort((a,b) => {
      if (a.name > b.name){
        return 1
      }else if (b.name > a.name){
        return -1
      }else{
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
      />

      {isLoading && <div className="loadingImg"> <img src="./images/loading-gif.webp" />
      </div>}

      {!isLoading && <ul className="wholeCards">
        {people.map((person) => (
          <Card  key={person.name} {...person} />
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