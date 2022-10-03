import React from 'react'

function SearchBar({searchTerm, setSearchTerm}) {
  function handleInputChange (e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div>
      <input
        className='anime-search'
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchBar
