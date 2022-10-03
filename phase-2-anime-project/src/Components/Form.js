import React, {useState} from 'react'


 function Form({ animeList, setAnimeList }) {
  const onAddAnime = (newAnime) => {
    setAnimeList([...animeList, newAnime])
  }

   const [newItem, setNewItem] = useState({
      title: "",
      bookmark: "",
      image: "",
      anime: false ? false : true,
      manga: false ? false : true
   })

   function handleChange(e){
    setNewItem({
       ...newItem,
       [e.target.name]: e.target.value
   });
  }

  function handleSubmit(e){
    e.preventDefault();
    const newAnimeAdded = {
      title: newItem.title,
      bookmark: newItem.bookmark,
      image: newItem.image,
      anime: newItem.anime,
      manga: newItem.manga
    }
    fetch("http://localhost:3000/animes",{
      method: 'POST',
      headers: {
        "Content-Type": "application/jsonn",
      },
      body: JSON.stringify(newAnimeAdded)
    })
    .then((res) => res.json())
    .then((data) => {
      onAddAnime(data)
        setNewItem({
          title: '',
          bookmark: '',
          image: '',
        })
    })
  }

  return (
    <aside>
       <form onSubmit={handleSubmit} className="new-poem-form">
      <input
      placeholder="Title"
      name="title"
      onChange={handleChange}
       />
      <input
      placeholder="Chapter/Episode"
      name="bookmark"
      onChange={handleChange}
      />
      <input
      placeholder="Img Url"
      name="image"
      onChange={handleChange}
      />
      <input 
      type="checkbox"
      name="anime"
      value="false"
      onChange={handleChange}
      />
      <label for="Anime">Anime</label>
      <input 
      type="checkbox"
      name="manga"
      value="false"
      onChange={handleChange}
      />
      <label for="Manga">Manga</label>
  
      <input
      type="submit"
      
       />
       
    </form> 
    </aside>
  )
}

export default Form;