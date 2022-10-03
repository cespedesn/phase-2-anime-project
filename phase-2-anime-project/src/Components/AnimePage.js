import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import AnimeList from './AnimeList'


function AnimePage() {
  return (
   <div> 
     <Header />
     <SearchBar />
     <NavBar />
     <AnimeList />
   </div>

  )
}

export default AnimePage


