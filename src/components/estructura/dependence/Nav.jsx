import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../images/Logo.png'

export default function Nav() {
  let isInicio = useLocation().pathname === '/' ? true : false
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark position-absolute top-0 start-0 w-100"
      style={{ zIndex: 1 }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="100" />
        </Link>
        {!isInicio && (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#desplegable"
              aria-controls="desplegable"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="desplegable">
              <ul className="navbar-nav ms-auto fs-3">
                <li className="nav-item mx-5">
                  <Link to="/" className="nav-link active">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item mx-5">
                  <Link to="/comisiones" className="nav-link active">
                    Comisiones
                  </Link>
                </li>
                <li className="nav-item mx-5">
                  <Link to="/dibujos" className="nav-link active">
                    Dibujos
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
