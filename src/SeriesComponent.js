import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
const Series = () => {

  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios.get('/api/series').then(resp => {
      setSeries(inicialResp => resp.data.data)
    })
  }, [])
  if (series.length === 0 ){
    return (
      <div className="container">
        <Link to='/series/novo' className="btn btn-primary"> Nova Série</Link>
        <div className="alert alert-warning" role="alert">
        Você não possui series cadastradas!
        </div>
      </div>
    )
  }
  const createTableLine = (serieData => {
    return(
      <tr key={serieData.id}>
        <th scope="row">{serieData.id}</th>
        <td>{serieData.name}</td>
        <td>
          <button className='btn btn-danger' onClick={()=> deleteGenre(serieData.id)}>Remover</button>
          <Link to={'/series/'+serieData.id} className="btn btn-warning">Editar</Link>
        </td>
      </tr>
    )
  })

  const deleteGenre = (id) =>{
    axios.delete(`/api/series/${id}`).then(resp => {
      const newSerieList = series.filter(item => item.id !== id)
      setSeries(oldSeries => newSerieList)
    })
  }

  return (
    <div className="container">
      <h1> Séries</h1>
      <Link to='/series/novo' className="btn btn-primary"> Nova Série</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
        {series.map(createTableLine)}
        </tbody>
      </table>
    </div>
  )
}

export default Series;