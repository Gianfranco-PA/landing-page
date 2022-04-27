export function Imagen({ imagen, onClick }) {
  return (
    <img
      className="img-fluid"
      src={'/Dibujos/' + imagen}
      alt={imagen}
      onClick={onClick}
      data-bs-toggle="modal"
      data-bs-target="#imagen-modal"
    />
  )
}
