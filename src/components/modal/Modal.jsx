import React from 'react'

export default function Modal({ id, imagen }) {
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
          <div class="position-relative text-center">
            <img
              className="img-fluid"
              src={imagen}
              alt=""
              id="imagen"
              style={{ maxHeight: '90vh' }}
            />
            <button
              type="button"
              className="btn-close fs-1 position-absolute top-0 end-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  )
}
