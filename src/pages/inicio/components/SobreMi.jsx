import React from 'react'
import image from '../../../images/monigote.png'
import style from '../Inicio.module.css'

export default function SobreMi() {
  return (
    <div className="row justify-content-center align-items-center my-3">
      <div className="col-lg-4 col-md-8 col-sm-12">
        <img
          className="img-fluid rounded-circle"
          src={image}
          alt="Mi monigote"
        />
      </div>
      <div className="col-lg-8 px-5 my-2">
        <p className={'text-center ' + style.sobreMi}>
          Hola, me llamo Jorge! <br /> Tengo 20 años. Soy un dibujante
          profesional.
          <br /> Dibujar es mi pasion, me encanta,
          <br />
          tambien me gusta jugar videojuegos
        </p>
      </div>
    </div>
  )
}
