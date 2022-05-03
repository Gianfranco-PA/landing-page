import React from 'react'
import imagen1 from '../../images/saves/Dibujo 1.jpg'
import imagen2 from '../../images/saves/Dibujo 2.jpg'
import imagen19 from '../../images/saves/Dibujo 19.jpg'
import imagen25 from '../../images/saves/Dibujo 25.jpg'

export default function ListaImagenes({ onClick }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 justify-content-center align-items-center text-center my-3">
      <div className="col my-2 ">
        <img
          className={'img-fluid '}
          src={imagen1}
          alt=""
          onClick={onClick}
          style={{ maxHeight: '400px' }}
        />
      </div>
      <div className="col my-2 ">
        <img
          className={'img-fluid '}
          src={imagen2}
          alt=""
          onClick={onClick}
          style={{ maxHeight: '400px' }}
        />
      </div>
      <div className="col my-2 ">
        <img
          className={'img-fluid '}
          src={imagen19}
          alt=""
          onClick={onClick}
          style={{ maxHeight: '400px' }}
        />
      </div>
      <div className="col my-2 ">
        <img
          className={'img-fluid '}
          src={imagen25}
          alt=""
          onClick={onClick}
          style={{ maxHeight: '400px' }}
        />
      </div>
    </div>
  )
}
