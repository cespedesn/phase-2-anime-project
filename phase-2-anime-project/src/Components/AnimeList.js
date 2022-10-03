import React from 'react'
import Tile from './Tile'

 function AnimeList({ animeList }) {
    const animes = animeList.map((anime) => {
      return (
            <Tile
              key={anime.id}  
              anime={anime}
              />
      )
    } )
  return (
    <div>
    {animes}
    </div>
  )
}

export default AnimeList