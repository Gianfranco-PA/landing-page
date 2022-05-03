import React from 'react'
import imagenComision from '../../../images/ComisionesM750.jpg'
import imagenDibujo from '../../../images/DibujosM750.jpg'
import { Link } from 'react-router-dom'

export default function Redireccion() {
  function cambioOpacidad(id, num) {
    document.querySelector(id).style.opacity = num
  }
  return (
    <div className="row justify-content-center align-items-center text-center mb-3">
      <div className="col-md-6 px-0">
        <div
          className={'position-relative '}
          onMouseOver={() => {
            cambioOpacidad('#redireccionComision', 0.6)
          }}
          onMouseOut={() => {
            cambioOpacidad('#redireccionComision', 1)
          }}
        >
          <Link to="/Comisiones">
            <img
              id="redireccionComision"
              className="img-fluid "
              src={imagenComision}
              alt=""
            />
            <p className="text-white fw-lighter fs-1 position-absolute top-50 start-50 translate-middle">
              C&nbsp;O&nbsp;M&nbsp;I&nbsp;S&nbsp;I&nbsp;O&nbsp;N&nbsp;E&nbsp;S
            </p>
          </Link>
        </div>
      </div>
      <div className="col-md-6 px-0 ">
        <div
          className={'position-relative '}
          onMouseOver={() => {
            cambioOpacidad('#redireccionDibujo', 0.6)
          }}
          onMouseOut={() => {
            cambioOpacidad('#redireccionDibujo', 1)
          }}
        >
          <Link to="/Dibujos">
            <img
              id="redireccionDibujo"
              className="img-fluid "
              src={imagenDibujo}
              alt=""
            />
            <p className="text-white fw-lighter fs-1 position-absolute top-50 start-50 translate-middle">
              D&nbsp;&nbsp;I&nbsp;&nbsp;B&nbsp;&nbsp;U&nbsp;&nbsp;J&nbsp;&nbsp;O&nbsp;&nbsp;S
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
