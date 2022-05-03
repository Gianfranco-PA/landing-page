import React from 'react'

export default function Modal({ title, descripcion, id, imagen }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="titulo-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content" style={{ background: '#1A1A1A' }}>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col-9 m-0 p-0 text-center">
                <img
                  className="img-fluid"
                  src={imagen}
                  alt=""
                  id="imagen"
                  style={{ maxHeight: '40em' }}
                />
              </div>
              <div className="col-3 align-self-center">
                <h3 className="text-center mb-5">{title}</h3>
                <p className="mb-1">Descripción:</p>
                <p className="mb-5">{descripcion}</p>
                <div className="w-100 text-center">
                  <button className="btn btn-secondary" data-bs-dismiss="modal">
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
