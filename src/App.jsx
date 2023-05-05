
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
