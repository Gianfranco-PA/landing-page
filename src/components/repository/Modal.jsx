export function Modal({ name, image }) {
  return (
    <div
      className="modal fade"
      id={name}
      tabIndex="-1"
      aria-labelledby="imagen-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-body  p-0 m-0">
            <div className="position-relative">
              <img className="img-fluid" src={'/Dibujos/' + image} alt="" />
              <div className="position-absolute top-0 end-0 fs-2">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
