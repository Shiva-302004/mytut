import React from 'react'

const Search = ({search,setsearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input placeholder='search item ' id='search' type='text' role='searchbox' value={search} onChange={(e)=>setsearch(e.target.value)}/>

    </form>
  )
}

export default Search