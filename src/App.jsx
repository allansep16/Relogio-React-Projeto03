import { useState } from 'react'
import './App.css'
import RelogioDigital from './Components/Relogio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RelogioDigital/>
    </>
  )
}

export default App
