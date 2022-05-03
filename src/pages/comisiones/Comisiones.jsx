import React, { useState } from 'react'
import TituloImagen from '../../components/tituloImagen/TituloImagen'
import imagen from '../../images/Comision-TituloM1440.jpg'
import Pendientes from './components/Pendientes'
import ListaImagenes from '../../components/listaImagenes/ListaImagenes'
import InputFecha from '../../components/inputFecha/InputFecha'

export default function Comisiones() {
  const [fechas, setFechas] = useState({
    Desde: '1000-01-01',
    Hasta: '9999-12-31',
  })

  function onBlur(e) {
    setFechas({ ...fechas, [e.target.name]: e.target.value })
    console.log(fechas)
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
          <div className="col-md-3">
            <InputFecha text="Desde" id="fechaDesde" onBlur={onBlur} />
          </div>
          <div className="col-md-3">
            <InputFecha text="Hasta" id="fechaHasta" onBlur={onBlur} />
          </div>
        </div>
        <ListaImagenes filter={fechas} type="Comision" />
      </div>
    </>
  )
}
