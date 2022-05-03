import React, { useContext } from 'react'
import style from '../Comisiones.module.css'
import { DataContext } from '../../../utils/constantes'

export default function TablaPendientes() {
  const data = useContext(DataContext)
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
        {data.map(
          (comision) =>
            (comision.Estado === 'En proceso' ||
              comision.Estado === 'No iniciado') && (
              <tr key={comision.id} className={style.borde}>
                <td>{comision.Para}</td>
                <td
                  className={
                    comision.Estado === 'No iniciado'
                      ? 'text-danger'
                      : 'text-warning'
                  }
                >
                  {comision.Estado}
                </td>
              </tr>
            ),
        )}
      </tbody>
    </table>
  )
}
