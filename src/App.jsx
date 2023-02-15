import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Guard from './Component/Guard'
import Detail from './Component/product/Detail'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Product from './Pages/Product'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ <Login /> } />
        <Route path='/dashboard' element={ <Guard> <Dashboard /> </Guard> } />
        <Route path='/'  element={ <Guard> <Product /> </Guard> } />
        <Route path='/product-detail/:id'  element={ <Guard> <Detail /> </Guard> } />
      </Routes>
    </BrowserRouter>
    )
}

export default App
