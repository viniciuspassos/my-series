import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewSerie = () => {
  const [name, setName] = useState(``)
  const [sucess, setSucess] = useState(false)

  const onChangeName = evt => {
    setName(originalValue => evt.target.value)
  }

  const submitSerie = (evt) => {
    evt.preventDefault()
    axios.post('/api/series', {
      name
    }).then(resp => {
      if (resp.status === 200) {
        setSucess(oldValue => true)
      }
    })
  }

  if (sucess) {
    return (<Redirect to='/series' />)
  }

  return (
    <div className="container">
      <h1>Nova Série</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome da Série</label>
          <input type="text" value={name} onChange={onChangeName} className="form-control" id="name" placeholder="ex.: House" />
        </div>
        <button type="submit" onClick={submitSerie} className="btn btn-primary">Criar</button>
      </form>
    </div>
  )
}

export default NewSerie;