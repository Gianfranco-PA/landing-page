import React from 'react'
import style from '../Comisiones.module.css'

export default function TablaPendientes() {
  return (
    <table
      className={
        'table table-bordered fs-3 text-center text-white ' + style.tabla
      }
    >
      <thead>
        <tr className={style.borde}>
          <th scope="col">Para</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr className={style.borde}>
          <td>Kuma</td>
          <td>En proceso</td>
        </tr>
        <tr className={style.borde}>
          <td>Goku</td>
          <td>En proceso</td>
        </tr>
        <tr className={style.borde}>
          <td>Macarrones85</td>
          <td>En proceso</td>
        </tr>
      </tbody>
    </table>
  )
}
