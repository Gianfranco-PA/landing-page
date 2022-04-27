import Style from './Pie.module.css'
export function Pie() {
  return (
    <div className={'container-fluid m-0 py-5 ' + Style.fondo}>
      <div className="row justify-content-center text-center">
        <p className="fs-1 text-white">Redes sociales</p>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col-sm-1">
          <a
            href="https://www.facebook.com/HyunNandaBecker"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-fluid" src="/facebook.png" alt="Facebook" />
          </a>
        </div>
        <div className="col-sm-1">
          <a
            href="https://twitter.com/YorshCP"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-fluid" src="/twitter.png" alt="Twitter" />
          </a>
        </div>
        <div className="col-sm-1">
          <a
            href="https://www.instagram.com/yorsh2002/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-fluid" src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}
