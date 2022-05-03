import React from 'react'
import style from '../Inicio.module.css'
import imagenComision from '../../../images/ComisionesM750.jpg'
import imagenDibujo from '../../../images/DibujosM750.jpg'
import { Link } from 'react-router-dom'

export default function Redireccion() {
  return (
    <div className="row justify-content-center align-items-center text-center mb-3">
      <div className="col-md-6 px-0">
        <div className={'position-relative ' + style.redireccionImagen}>
          <Link to="/Comisiones">
            <img className="img-fluid " src={imagenComision} alt="" />
            <p className="text-white fw-lighter fs-1 position-absolute top-50 start-50 translate-middle">
              C&nbsp;O&nbsp;M&nbsp;I&nbsp;S&nbsp;I&nbsp;O&nbsp;N&nbsp;E&nbsp;S
            </p>
          </Link>
        </div>
      </div>
      <div className="col-md-6 px-0 ">
        <div className={'position-relative ' + style.redireccionImagen}>
          <Link to="/Dibujos">
            <img className="img-fluid " src={imagenDibujo} alt="" />
            <p className="text-white fw-lighter fs-1 position-absolute top-50 start-50 translate-middle">
              D&nbsp;&nbsp;I&nbsp;&nbsp;B&nbsp;&nbsp;U&nbsp;&nbsp;J&nbsp;&nbsp;O&nbsp;&nbsp;S
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
