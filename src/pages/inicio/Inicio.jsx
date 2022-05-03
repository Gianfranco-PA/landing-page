import React from 'react'
import Redireccion from './components/Redireccion'
import SobreMi from './components/SobreMi'
import TituloImagen from '../../components/tituloImagen/TituloImagen'
import imagen from '../../images/InicioM1444X810.jpg'

export default function Inicio() {
  return (
    <div className="container-fluid">
      <TituloImagen imagen={imagen}>
        Y&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;&nbsp;S&nbsp;&nbsp;&nbsp;H
      </TituloImagen>
      <SobreMi />
      <Redireccion />
    </div>
  )
}
