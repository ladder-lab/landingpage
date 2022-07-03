import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from './Home'
import About from './About'
import { routes } from 'constants/routes'
import Community from './Community'

function App() {
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.community} element={<Community />} />
      </Routes>
    </div>
  )
}

export default App
