import { useState } from 'react'
import './App.css'
import TextChange from './Components/TextChange'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TextChange />
    </>
  )
}

export default App
