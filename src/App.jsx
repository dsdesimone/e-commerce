
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import getConfigToken from './utils/getConfigToken'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  // const getPostCart = (url, data) => {
  //   axios.post(url, data, getConfigToken())
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }
  
  // useEffect(() => {
  //   getPostCart('https://e-commerce-api-v2.academlo.tech/api/v1/cart', {
  //     "quantity": 1,
  //     "productId": 3
  //   })
  // }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductId />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/purchases' element={<Purchases />} />
      </Routes>
    </div>
  )
}

export default App
