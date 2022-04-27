import Style from './Beggining.module.css'

export function Beggining() {
  return (
    <div className="container-fluid p-0" id="inicio">
      <div className="position-relative">
        <img className="img-fluid" src="Dibujo-Presentacion.jpg" alt="" />
        <div className="position-absolute top-50 start-50 translate-middle pb-5 pt-0">
          <p className={'text-center fw-bold fs-2 ' + Style.posicionTexto}>
            Dibujante profesional
          </p>
        </div>
      </div>
    </div>
  )
}
