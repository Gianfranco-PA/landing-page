import { Route, Routes } from 'react-router-dom'
import Estructura from './components/estructura/Estructura'
import Añadir from './pages/añadir/Añadir'
import Comisiones from './pages/comisiones/Comisiones'
import Detalle from './pages/detalle/Detalle'
import Dibujos from './pages/dibujos/Dibujos'
import Inicio from './pages/inicio/Inicio'

export function App() {
  return (
    <Estructura>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Comisiones" element={<Comisiones />} />
        <Route exact path="/Dibujos" element={<Dibujos />} />
        <Route exact path="/Detalle" element={<Detalle />} />
        <Route exact path="/Insertar" element={<Añadir />} />
      </Routes>
    </Estructura>
  )
}
