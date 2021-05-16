import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
const Genres = () => {

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios.get('/api/genres').then(resp => {
      setGenres(inicialResp => resp.data.data)
    })
  }, [])
  if (genres.length === 0 ){
    return (
      <div className="container">
        <Link to='/generos/novo' className="btn btn-primary"> Novo genêro</Link>
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
        <td>
          <button className='btn btn-danger' onClick={()=> deleteGenre(genreData.id)}>Remover</button>
          <Link to={'/generos/'+genreData.id} className="btn btn-warning">Editar</Link>
        </td>
      </tr>
    )
  })

  const deleteGenre = (id) =>{
    axios.delete(`/api/genres/${id}`).then(resp => {
      const newGenreList = genres.filter(item => item.id !== id)
      setGenres(oldGenreList => newGenreList)
    })
  }

  return (
    <div className="container">
      <h1> Genêros</h1>
      <Link to='/generos/novo' className="btn btn-primary"> Novo genêro</Link>
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