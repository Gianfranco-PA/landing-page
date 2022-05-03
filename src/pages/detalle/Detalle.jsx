import React from 'react'
import TituloImagen from '../../components/tituloImagen/TituloImagen'
import imagen from '../../images/Dibujo-TituloM1440.jpg'
import imagen1 from '../../images/saves/Dibujo 1.jpg'
import imagen19 from '../../images/saves/Dibujo 19.jpg'

export default function Detalle() {
  return (
    <div className="container-fluid">
      <TituloImagen imagen={imagen}>Detalle</TituloImagen>
      <div className="row my-5">
        <h2 className="text-center">Titulo</h2>
      </div>
      <div className="row justify-content-center my-4">
        <div className="col-lg-8 text-center">
          <img
            className="img-fluid"
            src={imagen19}
            alt=""
            style={{ maxHeight: '70vh' }}
          />
        </div>
        <div className="col-lg-4 align-self-center fs-4 my-4">
          <p>Descripción:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            aliquid, consequatur error consectetur aperiam suscipit possimus
            facilis qui sapiente aspernatur reprehenderit molestiae molestias
            maxime eius delectus velit adipisci modi dignissimos.
          </p>
        </div>
      </div>
    </div>
  )
}
