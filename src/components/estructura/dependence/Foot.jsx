import React from 'react'
import Contacto from './Contacto'

export default function Foot() {
  return (
    <footer className="container-fluid position-absolute bottom-0 start-0 py-4">
      <div className="row justify-content-center text-center">
        <div className="col-1 mx-2">
          <Contacto type="Twitter" />
        </div>
        <div className="col-1 mx-2">
          <Contacto type="Instagram" />
        </div>
        <div className="col-1 mx-2">
          <Contacto type="Youtube" />
        </div>
      </div>
    </footer>
  )
}
