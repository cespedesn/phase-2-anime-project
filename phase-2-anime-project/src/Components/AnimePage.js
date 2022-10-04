import React, { useState } from 'react'
import Header from './Header'
import AnimeList from './AnimeList'
function AnimePage() {
  const [animeList, setAnimeList] = useState([]);
  //const [searchTerm, setSearchTerm] = useState('')
  return (
   <div>
     <Header animeList={animeList} setAnimeList={setAnimeList}/>
     <AnimeList animeList={animeList} />
   </div>
  )
}
export default AnimePage;