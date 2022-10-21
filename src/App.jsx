import { useState } from 'react'
import {RoutesJS} from './routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RoutesJS/>
    </div>
  )
}

export default App
