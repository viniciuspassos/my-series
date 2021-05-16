import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Badge } from 'reactstrap';

const InfoSerie = (props) => {
  const { match } = props
  const [data, setData] = useState({})
  const [form, setForm] = useState({})
  const [mode, setMode] = useState('info')
  const [genres, setGenres] = useState([])
  useEffect(() => {
    axios.get('/api/series/' + match.params.id).then(res => {
      setData(oldData => res.data);
      setForm(initialValue => res.data);
    }, [match.params.id])
  })

  useEffect(() => {
    axios.get('/api/genres').then(resp => {
      console.log(resp.data);
      setGenres(initialValue => resp.data.data)
    })
  },[])

  const masterHeader = {
    height: '50vh',
    minHeight: '500px',
    backgroundImage: `url('${data.background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no repeat'
  }
  //aqui acontece a chamada de duas funções
  //1ª tem field como parametro e retorna a 2ª que tem evt como param
  const changeSerie = field => evt => {
    setForm({
      ...form,
      [field]: evt.target.value
    })
  }

  const submitSerie = (evt) => {
    evt.preventDefault()
  }

  return (
    <div>
      <header style={masterHeader}>
        <div className='h-100' style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className='h-100 container'>
            <div className='row h-100 align-items-center'>
              <div className='col-3'>
                <img alt={data.name} className='img-fluid img-thumbnail' src={data.poster} />
              </div>
              <div className='col-8'>
                <h1 className="font-weight-light text-white">{data.name}</h1>
                <div className='lead text-white'>
                  <Badge style={{ backgroundColor: 'green' }}>Asistido</Badge>
                  <Badge style={{ backgroundColor: 'orange' }}>Não Assistido</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <button className="btn btn-primary" onClick={() => setMode(oldValue => 'edit')}>Editar</button>
      </div>
      {
        mode === 'edit' &&
        <div className="container">
          <h1>Editar Série</h1>
          <pre>{JSON.stringify(form)}</pre>
          <button className="btn btn-primary" onClick={() => setMode(oldValue => 'info')}>Cancelar Edição</button>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome da Série</label>
              <input type="text" value={form.name} onChange={changeSerie('name')} className="form-control" id="name" placeholder="ex.: Ação" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Comentários</label>
              <input type="text" value={form.comments} onChange={changeSerie('comments')} className="form-control" id="name" placeholder="ex.: Ação" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Genêro</label>
              <select class="form-select" aria-label="Default select example" onChange={changeSerie('genre')}>
                {genres.map(genre => <option key={genre.id} selected={genre.id === form.genre} value={genre.id}>{genre.name}</option>)}
              </select>
            </div>
            <button type="submit" onClick={submitSerie} className="btn btn-primary">Criar</button>
          </form>
        </div>
      }
    </div>
  )
}

export default InfoSerie;