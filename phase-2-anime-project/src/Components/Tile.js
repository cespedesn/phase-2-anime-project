import React from 'react'



 function Tile({ anime }) {
 const {title, bookmark, image} = anime

  return (
    <div>
      <div>
       <img src={image} alt={title} />
      </div>
      <div>
       {title}
       {bookmark}
      </div>

    </div>
  )
}

export default Tile