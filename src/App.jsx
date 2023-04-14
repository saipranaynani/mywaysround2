import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddFood from './pages/AddFood'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addFood" element={<AddFood />} />
      </Routes>
    </>
  )
}

export default App
