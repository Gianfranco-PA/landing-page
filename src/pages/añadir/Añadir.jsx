import React, { useState } from 'react'
import TituloImagen from '../../components/tituloImagen/TituloImagen'
import imagen from '../../images/Dibujo-TituloM1440.jpg'
import InputDato from './components/InputDato'
import InputOpciones from './components/InputOpciones'

export default function Añadir() {
  const [img, setImagen] = useState('')
  const [data, setData] = useState({
    Titulo: '',
    Para: '',
    Descripción: '',
    Tipo: '',
    Estado: '',
    Imagen: '',
  })

  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  function visualizar(e) {
    const arch = e.target.files
    if (!arch || !arch.length) {
      return
    }
    const previsual = URL.createObjectURL(arch[0])
    fileUpload(arch[0])
    setImagen(previsual)
    console.log(data)
  }

  function getBase64Image(img) {
    let reader = new FileReader()
    reader.readAsDataURL(img)
    reader.onload = () => {
      setData({ ...data, Imagen: reader.result })
    }
    reader.onerror = (error) => {
      console.log(error)
    }
  }

  function fileUpload(file) {
    try {
      getBase64Image(file, (base64string) => {
        setData({ ...data, Imagen: base64string })
        console.log(data)
        console.log('Sie es aca')
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="container-fluid">
      <TituloImagen imagen={imagen}>Añadir</TituloImagen>
      <form onSubmit={onSubmit}>
        <div className="row justify-content-center mt-5">
          <div className="col-4">
            <InputDato
              text="Titulo"
              value={data.Titulo}
              onChange={(e) => onChange(e)}
            />
            <InputDato
              text="Para"
              value={data.Para}
              onChange={(e) => onChange(e)}
            />
            <InputDato
              text="Descripción"
              value={data.Descripción}
              onChange={(e) => onChange(e)}
            />
            <InputOpciones
              text="Tipo"
              data={[
                { name: 'Comision', value: 'comision' },
                { name: 'Dibujo', value: 'Dibujo' },
              ]}
              value={data.Tipo}
              onChange={(e) => onChange(e)}
            />
            <InputOpciones
              text="Estado"
              data={[
                { name: 'No iniciado', value: 'No iniciado' },
                { name: 'En proceso', value: 'En proceso' },
              ]}
              value={data.Estado}
              onChange={(e) => onChange(e)}
            />
            <input
              className="form-control"
              type="file"
              id="inputImagen"
              onChange={(e) => visualizar(e)}
              name="Imagen"
              accept="image/*"
            />
          </div>
        </div>
        <div className="row justify-content-center mb-5 mt-4">
          <div className="col-10 text-center">
            <img
              className="img-fluid"
              src={img}
              alt=""
              style={{ maxHeight: '70vh' }}
            />
          </div>
        </div>
        <div className="row justify-content-center mb-5 mt-4">
          <div className="col-2 text-center">
            <button type="submit" className="btn btn-primary w-100">
              Añadir
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
