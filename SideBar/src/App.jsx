import { useState } from 'react'
import './App.css'
import Sidebar from './Component/Sidebar'
import Main from './Component/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
