import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../utils/constantes'
import { BsFillEyeFill } from 'react-icons/bs'
import style from './Imagen.module.css'

export default function ListaImagenes({ type, filter }) {
  const data = useContext(DataContext)

  function filtrar(fecha) {
    const comp = new Date(fecha)
    const inferior = new Date(filter.Desde)
    const superior = new Date(filter.Hasta)
    return inferior <= comp && comp <= superior
  }

  function cambioOpacidad(id, num) {
    document.getElementById(id).style.opacity = num
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 justify-content-center align-items-center text-center my-3">
      {data.map(
        (imagen) =>
          imagen.Tipo === type &&
          filtrar(imagen.Fecha) && (
            <div key={imagen.id} className="col my-2 ">
              <Link to={'/detalle/' + imagen.id}>
                <div
                  className={style.contenedor + ' position-relative'}
                  onMouseOver={() => {
                    cambioOpacidad(imagen.id, 0.6)
                  }}
                  onMouseOut={() => {
                    cambioOpacidad(imagen.id, 1)
                  }}
                >
                  <img
                    id={imagen.id}
                    className={'img-fluid ' + style.imagen}
                    src={'data:image/png;base64, ' + imagen.Imagen}
                    alt=""
                    style={{ maxHeight: '400px' }}
                  />
                  <div
                    className={
                      style.overlay +
                      ' position-absolute top-50 start-50 translate-middle'
                    }
                  >
                    <p className="fs-3 text-white">{imagen.Titulo}</p>
                    <BsFillEyeFill color="white" size={30} />
                  </div>
                </div>
              </Link>
            </div>
          ),
      )}
    </div>
  )
}
