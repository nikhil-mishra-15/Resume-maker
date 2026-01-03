import { useState } from 'react'
import Inputform from './comp/inputform'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './comp/mainpage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/inputform/*" element={<Inputform />} />
    </Routes>
    </>
  )
}

export default App
