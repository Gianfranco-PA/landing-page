import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TituloImagen from '../../components/tituloImagen/TituloImagen'
import imagen from '../../images/Dibujo-TituloM1440.jpg'
import data from '../../data.json'
import Modal from '../../components/modal/Modal'

export default function Detalle() {
  const { id } = useParams()

  const [info, setInfo] = useState()
  const [modal, setModal] = useState()

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    let result = data.filter((dato) => dato.id == id)
    setInfo(result[0])
  }, [id])

  function mostrarImagen(e) {
    setModal(e.target.src)
  }

  if (!info) {
    return null
  }

  return (
    <>
      <div className="container-fluid">
        <TituloImagen imagen={imagen}>Detalle</TituloImagen>
        <div className="row my-5">
          <h2 className="text-center">{info.Titulo}</h2>
        </div>
        <div className="row justify-content-center my-4">
          <div className="col-lg-8 text-center">
            <img
              className="img-fluid"
              src={'data:image/png;base64, ' + info.Imagen}
              alt=""
              style={{ maxHeight: '70vh', cursor: 'pointer' }}
              data-bs-toggle="modal"
              data-bs-target="#modalImagen"
              onClick={mostrarImagen}
            />
          </div>
          <div className="col-lg-4 align-self-center fs-4 my-4">
            <p style={{ wordWrap: 'break-word' }}>
              <strong>Descripción:</strong> {info.Descripcion}
            </p>
            <p>
              <strong>Publicado el:</strong> {info.Fecha}
            </p>
          </div>
        </div>
      </div>
      <Modal id="modalImagen" imagen={modal} />
    </>
  )
}
