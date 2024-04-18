import { useEffect } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Menu from './components/menu/Menu'

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
