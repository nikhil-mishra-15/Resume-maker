import { useState } from 'react'
import Inputform from './comp/inputform'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Inputform />
    </>
  )
}

export default App
