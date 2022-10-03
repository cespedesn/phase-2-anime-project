import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import AnimeList from './AnimeList'


function AnimePage() {
  const [anime, setAnime] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [topAnime, setTopAnime] = useState([]);


  const getTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		setTopAnime(temp.top.slice(0, 5));
	}

  useEffect(() => {
    getTopAnime();
  }, [])



// useEffect(() => {
//   fetch(`https://api.jikan.moe/v3/anime/id/request/parameter`)
//   .then((res) => res.json())
//   .then((data) => setAnime(data))
// }, [])

  return (
   <div> 
     <Header />
     <NavBar />
     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
     <AnimeList anime={topAnime} topAnime={topAnime}/>
   </div>

  )
}

export default AnimePage;


