import React, { useState } from 'react'
import BtnAñadir from '../../components/btnAñadir/BtnAñadir'
import InputFecha from '../../components/inputFecha/InputFecha'
import ListaImagenes from '../../components/listaImagenes/ListaImagenes'
import Modal from '../../components/modal/Modal'
import TituloImagen from '../../components/tituloImagen/TituloImagen'
import imagen from '../../images/Dibujo-TituloM1440.jpg'

export default function Dibujos() {
  const [imagenModal, setImagenModal] = useState()

  function onClick(e) {
    setImagenModal(e.target.src)
  }

  return (
    <>
      <div className="container-fluid">
        <TituloImagen imagen={imagen}>Dibujos</TituloImagen>
        <div className="row justify-content-start align-items-center my-5">
          <div className="col-sm-3">
            <InputFecha text="Desde:" />
          </div>
          <div className="col-sm-3">
            <InputFecha text="Hasta:" />
          </div>
          <div className="col-sm-3 ms-auto px-4">
            <BtnAñadir />
          </div>
        </div>
        <ListaImagenes onClick={onClick} />
      </div>
    </>
  )
}
