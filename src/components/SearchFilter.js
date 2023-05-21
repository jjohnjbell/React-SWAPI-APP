import React from 'react'
import aToZBtn from '../assets/images/atoz.svg'

function SearchFilter(props) {
  const { search, setSearch,fetchPeopleSorted, fetchOldest,fetchYoungest} = props;

  function handelInput(e) {
    const text = e.target.value;
    setSearch(text);
  }

  return (
    <div className="searchContainer">
        <input className = "searchBar" type="search"  placeholder='Search' onChange={handelInput}  /> 
       {/* Shows what you are typing realtime in the searchbar */}
        {/* <h1>{search}</h1> */}
        {/* <button id="aToZ" onClick={fetchPeopleSorted}>A to Z </button> */}
        <img id="aToZ" onClick={fetchPeopleSorted} src={aToZBtn}/>
        <button onClick={fetchYoungest}>Youngest</button>
        <button onClick={fetchOldest}>Oldest</button>

    </div>
  )
}

export default SearchFilter

