import { useState } from 'react'
// import './App.css'
import Navbar from './Components/Navbar'
import ItemsContainer from './Components/ItemsContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Navbar  />
      <ItemsContainer />
    </div>
  )
}

export default App


// https://course-api.com/react-useReducer-cart-project