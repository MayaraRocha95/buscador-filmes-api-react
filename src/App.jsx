import React,{ useState } from 'react'
import './App.css'

function App() {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const submitHandler = e => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(
      response => response.json()
    ).then(value => setData(value.Search))
  }

  return (
    <div>
      <center>
        <h1>Pesquise seu filme/série favorito</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/><br/>
          <input className="button" type="submit" value="Encontre"/>
        </form>
        
        <div className="">
       {data.map(movie=>
       <div className="col-md-4">
        <div className="card">
          <h4 className="card-title">{movie.Title}</h4>
          <img  src={movie.Poster} className="img-card" alt={movie.Title} />
          <div className="card-body">
            <p>{movie.Type}</p>
            <p>{movie.Year}</p>
          </div>
        </div>
        </div>
        )}
     </div>
     </center>
    </div>
   
  )
}

export default App
