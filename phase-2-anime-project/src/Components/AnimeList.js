import React from 'react'
import Tile from './Tile'

 function AnimeList({anime}) {
   const animeTile = anime.map((anime) => (
    <Tile
        key={anime.mal_id}
        anime={anime}
    /> 
   ));
    
  return (
    <div>
      {animeTile}
    </div>
  )
}

export default AnimeList


