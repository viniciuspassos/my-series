import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewGenre = () => {
  const [name, setName] = useState(``)
  const [sucess, setSucess] = useState(false)

  const onChangeName = evt => {
    setName(originalValue => evt.target.value)
  }

  const submitGenre = (evt) => {
    evt.preventDefault()
    axios.post('/api/genres', {
      name
    }).then(resp => {
      if (resp.status === 200) {
        setSucess(oldValue => true)
      }
    })
  }

  if (sucess) {
    return (<Redirect to='/generos' />)
  }

  return (
    <div className="container">
      <h1>Novo Genêro</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome do Genêro</label>
          <input type="text" value={name} onChange={onChangeName} className="form-control" id="name" placeholder="ex.: Ação" />
        </div>
        <button type="submit" onClick={submitGenre} className="btn btn-primary">Criar</button>
      </form>
    </div>
  )
}

export default NewGenre;