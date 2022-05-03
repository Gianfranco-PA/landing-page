import React, { useState } from 'react'
import TituloImagen from '../../components/tituloImagen/TituloImagen'
import imagen from '../../images/Comision-TituloM1440.jpg'
import Pendientes from './components/Pendientes'
import ListaImagenes from '../../components/listaImagenes/ListaImagenes'
import InputFecha from '../../components/inputFecha/InputFecha'
import Modal from '../../components/modal/Modal'
import BtnAñadir from '../../components/btnAñadir/BtnAñadir'

export default function Comisiones() {
  const [imagenModal, setImagenModal] = useState()

  function onClick(e) {
    setImagenModal(e.target.src)
  }
  return (
    <>
      <div className="container-fluid">
        <TituloImagen imagen={imagen}>Comisiones</TituloImagen>
        <div className="row justify-content-center align-items-center my-3">
          <h2 className="text-center my-4 fw-bold">Lista de pendientes</h2>
        </div>
        <Pendientes />
        <div className="row justify-content-center align-items-center my-3">
          <h2 className="text-center my-4 fw-bold">Galeria</h2>
        </div>
        <div className="row justify-content-start align-items-center my-3">
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
        <ListaImagenes onClick={onClick} modal="imagen" />
      </div>
      <Modal
        id="imagen"
        title="Dibujo 1"
        imagen={imagenModal}
        descripcion="Dibujo hecho para asdass que muestra un asdasfas"
      />
    </>
  )
}
