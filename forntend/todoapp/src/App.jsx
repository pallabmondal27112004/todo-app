import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos1 from './component/todos1'
import Todos from './component/todos1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todos1/>
      
    </>
  )
}

export default App
