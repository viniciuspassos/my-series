import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditGenre = (props) => {
  const { match } = props
  const [name, setName] = useState(``)
  const [sucess, setSucess] = useState(false)

  useEffect(() => {
    axios.get('/api/genres/'+match.params.id).then( res => {
      setName(oldName => res.data.name)
    })
  },[match.params.id])

  const onChangeName = evt => {
    setName(originalValue => evt.target.value)
  }

  const submitGenre = (evt) => {
    evt.preventDefault()
    axios.put('/api/genres/'+match.params.id, {
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
      <h1>Editar Genêro</h1>
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

export default EditGenre;