import { Modal } from './Modal'
import { useState } from 'react'
import { Imagen } from './Imagen'
import dibujos from '../../dibujos.json'

export function Repository() {
  const [image, setImage] = useState('')
  const onImagen = (e) => {
    setImage(e.target.alt)
    //console.log(e.target.alt)
    //console.log(typeof e.target.src)
  }

  return (
    <>
      <div className="Container-fluid p-0" id="repositorio">
        <div className="row justify-content-center p-0 m-0 text-center">
          <h1>Mi repositorio</h1>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 p-0 m-0 text-center">
          {dibujos.map((dibujo) => (
            <div className="col px-5 my-3">
              <Imagen imagen={dibujo.imagen} onClick={onImagen} />
            </div>
          ))}
        </div>
      </div>

      <Modal name="imagen-modal" image={image} />
    </>
  )
}
