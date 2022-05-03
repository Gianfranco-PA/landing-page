import React from 'react'

export default function TituloImagen({ imagen, children }) {
  return (
    <div className={'row justify-content-center align-items-center'} id="com">
      <div className="col-12 px-0">
        <div className="position-relative">
          <img
            className={'img-fluid '}
            src={imagen}
            alt=""
            style={{ opacity: 0.6 }}
          />
          <p
            className={'position-absolute top-50 start-50 translate-middle'}
            style={{ fontWeight: 100, fontSize: '7em' }}
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}
