/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Detail from './pages/Details'
import Profile from './pages/Profile'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navigation />
              <Homepage />
            </>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/detail/:id'
          element={
            <>
              <Navigation />
              <Detail />
            </>
          } />
        <Route
          path='/profile'
          element={
            <>
              <Navigation />
              <Profile />
            </>
          } />
      </Routes>
    </>
  )
}

export default App
