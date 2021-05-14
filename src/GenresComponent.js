import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Genres = () => {

  const [genres, setGenres] = useState({});
  useEffect(() => {
    axios.get('/api/genres').then(resp => {
      setGenres(inicialResp => resp.data.data)
    })
  }, [])
  console.log(genres);
  if (genres.length === 0 ){
    return (
      <div className="container">
        <div className="alert alert-warning" role="alert">
        Você não possui gêneros cadastrados!
        </div>
      </div>
    )
  }
  const createTableLine = (genreData => {
    return(
      <tr key={genreData.id}>
        <th scope="row">{genreData.id}</th>
        <td>{genreData.name}</td>
        <td><button>*</button></td>
      </tr>
    )
  })

  return (
    <div>
      <h1> Generos</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
        {genres.map(createTableLine)}
        </tbody>
      </table>
    </div>
  )
}

export default Genres;