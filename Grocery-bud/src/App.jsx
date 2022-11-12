import { useState } from 'react'
import './App.css'
import Card from './Card'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Card />
    </div>
  )
}

export default App
