import React, { useEffect, useState } from 'react'
import InputFecha from '../../components/inputFecha/InputFecha'
import ListaImagenes from '../../components/listaImagenes/ListaImagenes'
import TituloImagen from '../../components/tituloImagen/TituloImagen'
import imagen from '../../images/Dibujo-TituloM1440.jpg'

export default function Dibujos() {
  const [fechas, setFechas] = useState({
    Desde: '1000-01-01',
    Hasta: '9999-12-31',
  })

  const debouncedFilter = useDebounce(fechas, 1000)

  function onChange(e) {
    setFechas({ ...fechas, [e.target.name]: e.target.value })
  }

  // Hook
  function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value)
        }, delay)
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler)
        }
      },
      [value, delay], // Only re-call effect if value or delay changes
    )
    return debouncedValue
  }

  return (
    <>
      <div className="container-fluid">
        <TituloImagen imagen={imagen}>Dibujos</TituloImagen>
        <div className="row justify-content-start align-items-center my-5">
          <div className="col-sm-3">
            <InputFecha text="Desde" onChange={onChange} />
          </div>
          <div className="col-sm-3">
            <InputFecha text="Hasta" onChange={onChange} />
          </div>
        </div>
        <ListaImagenes filter={debouncedFilter} type="Dibujo" />
      </div>
    </>
  )
}
