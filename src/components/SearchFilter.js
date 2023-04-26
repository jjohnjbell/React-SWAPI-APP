import React from 'react'

function SearchFilter(props) {
  const { search, setSearch} = props;

  function handelInput(e) {
    const text = e.target.value;
    setSearch(text);
  }

  return (
    <div className="searchContainer">
        <input className = "searchBar" type="search"  placeholder='Search' onChange={handelInput}  /> 
       {/* Shows what you are typing realtime in the searchbar */}
        {/* <h1>{search}</h1> */}
        <button>A to Z </button>
        <button>Youngest</button>
        <button>Oldest</button>

    </div>
  )
}

export default SearchFilter