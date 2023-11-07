/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Detail from './pages/Details'
import Profile from './pages/Profile'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </>
  )
}

export default App
