import Style from './Nav.module.css'

export function Nav() {
  return (
    <nav className={'navbar navbar-expand-md navbar-light ' + Style.fondo}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" /*Marca*/>
          <img
            className="img-fluid rounded-circle"
            src="/Foto-Facebook.png"
            alt="Logo"
            width="100"
          />
          <img className="img-fluid" src="/Firma.png" alt="Logo" width="200" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#cabecera"
          aria-controls="cabecera"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="cabecera">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active fs-3"
                aria-current="page"
                href="#inicio"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-3" href="#presentacion">
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-3" href="#repositorio">
                Repositorio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
