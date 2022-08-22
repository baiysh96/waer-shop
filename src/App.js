import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { getProducts } from './redux/slices/productSlice'
import { data } from './data'
import Products from './pages/Products'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import { checkUserAuth } from './redux/slices/userSlice'
import RequireAth from './components/RequireAuth'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Homepage from './pages/Homepage'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserAuth())
    dispatch(getProducts(data))
  })
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/profile"
          element={
            <RequireAth>
              <Profile />
            </RequireAth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
