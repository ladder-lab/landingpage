import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from './Home'

function App() {
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
