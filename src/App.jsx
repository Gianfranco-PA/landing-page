import { Beggining } from './components/beggining/Beggining'
import { Nav } from './components/nav/Nav'
import { Pie } from './components/pie/Pie'
import { Presentation } from './components/presentation/Presentation'
import { Repository } from './components/repository/Repository'

export function App() {
  return (
    <div>
      <Nav />
      <Beggining />
      <Presentation />
      <Repository />
      <Pie />
    </div>
  )
}
