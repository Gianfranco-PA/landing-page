import React from 'react'
import { Link } from 'react-router-dom'

export default function BtnAñadir() {
  return (
    <div className="mb-3 row justify-content-end">
      <Link to="/insertar" className="text-end">
        <button className="btn btn-success w-50">Añadir</button>
      </Link>
    </div>
  )
}
